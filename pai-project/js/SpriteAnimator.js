// Sprite animation system for sprite sheets
class SpriteAnimator {
  constructor(spriteType, scale = 1) {
    this.spriteType = spriteType; // 'Vampires3', 'Slime1', 'Slime2', 'Slime3'
    this.scale = scale;
    this.currentAnimation = 'Idle';
    this.currentFrame = 0;
    this.frameTimer = 0;
    this.sprites = {};
    this.direction = 0; // 0=front, 1=back, 2=left, 3=right
    this.animationStates = {
      'Idle': { frames: 12, loop: true, speed: 20 },
      'Walk': { frames: 12, loop: true, speed: 12 },
      'Run': { frames: 12, loop: true, speed: 8 },
      'Attack': { frames: 12, loop: false, speed: 4 },
      'Hurt': { frames: 12, loop: false, speed: 8 },
      'Death': { frames: 12, loop: false, speed: 12 }
    };

    // Sprite sheet dimensions
    this.frameWidth = 64;
    this.frameHeight = 64;
    this.sheetColumns = 12;
    this.sheetRows = 4;

    this.loadSprites();
  }

  loadSprites() {
    const animations = ['Attack', 'Death', 'Hurt', 'Idle', 'Run', 'Walk'];
    animations.forEach(animation => {
      this.sprites[animation] = {};

      // Load the main sprite sheet
      const img = new Image();
      img.src = `sprites/${this.spriteType}/${animation}/${this.spriteType}_${animation}_full.png`;
      this.sprites[animation].sheet = img;

      // Load shadow if available
      const shadowImg = new Image();
      shadowImg.src = `sprites/${this.spriteType}/${animation}/${this.spriteType}_${animation}_shadow.png`;
      this.sprites[animation].shadow = shadowImg;

      // Load magic effect for Vampires3 attack
      if (this.spriteType === 'Vampires3' && animation === 'Attack') {
        const magicImg = new Image();
        magicImg.src = `sprites/${this.spriteType}/${animation}/${this.spriteType}_${animation}_magic.png`;
        this.sprites[animation].magic = magicImg;
      }
    });
  }

  setAnimation(animationName) {
    if (this.currentAnimation !== animationName) {
      this.currentAnimation = animationName;
      this.currentFrame = 0;
      this.frameTimer = 0;
    }
  }

  setDirection(moveX, moveY) {
    // Determine direction based on movement
    if (Math.abs(moveX) > Math.abs(moveY)) {
      // Horizontal movement is dominant
      this.direction = moveX > 0 ? 3 : 2; // right : left
    } else if (moveY !== 0) {
      // Vertical movement
      this.direction = moveY > 0 ? 0 : 1; // front : back
    }
    // If no movement, keep current direction
  }

  update() {
    const animState = this.animationStates[this.currentAnimation];
    if (!animState) return;

    this.frameTimer++;
    if (this.frameTimer >= animState.speed) {
      this.frameTimer = 0;

      if (animState.loop) {
        // For looping animations, always cycle through frames
        this.currentFrame = (this.currentFrame + 1) % animState.frames;
      } else if (this.currentFrame < animState.frames - 1) {
        // For non-looping animations, only advance if not at the end
        this.currentFrame++;
      }
      // If non-looping and at the end, keep the last frame
    }
  }

  draw(ctx, x, y, width = 64, height = 64) {
    const sprite = this.sprites[this.currentAnimation];
    if (!sprite || !sprite.sheet || !sprite.sheet.complete) {
      return;
    }

    const sheet = sprite.sheet;
    if (sheet.naturalWidth === 0 || sheet.naturalHeight === 0) {
      return;
    }

    ctx.save();

    // Ensure frame is within valid bounds
    const maxFrame = this.animationStates[this.currentAnimation].frames - 1;
    let safeFrame = Math.max(0, Math.min(this.currentFrame, maxFrame));

    // Validate sprite sheet coordinates
    const sourceX = safeFrame * this.frameWidth;
    const sourceY = this.direction * this.frameHeight;

    // Check if coordinates are within sprite sheet bounds
    if (sourceX + this.frameWidth > sheet.naturalWidth) {
      safeFrame = 0; // Fall back to first frame
    }

    if (sourceY + this.frameHeight > sheet.naturalHeight) {
      this.direction = 0; // Fall back to front direction
    }

    // Recalculate with safe values
    const finalSourceX = safeFrame * this.frameWidth;
    const finalSourceY = this.direction * this.frameHeight;

    // Draw shadow first if available
    if (sprite.shadow && sprite.shadow.complete) {
      ctx.globalAlpha = 0.3;
      try {
        ctx.drawImage(
          sprite.shadow,
          finalSourceX, finalSourceY,
          this.frameWidth, this.frameHeight,
          x, y + height * 0.8,
          width * this.scale, height * 0.2 * this.scale
        );
      } catch (e) {
        // Silent fail for shadows
      }
      ctx.globalAlpha = 1;
    }

    // Draw main sprite
    try {
      ctx.drawImage(
        sheet,
        finalSourceX, finalSourceY,
        this.frameWidth, this.frameHeight,
        x, y,
        width * this.scale, height * this.scale
      );
    } catch (e) {
      // Silent fail for main sprite
    }

    // Draw magic effect for Vampires3 attack animation
    if (this.spriteType === 'Vampires3' && this.currentAnimation === 'Attack' && sprite.magic && sprite.magic.complete) {
      ctx.globalAlpha = 0.8;
      try {
        ctx.drawImage(
          sprite.magic,
          finalSourceX, finalSourceY,
          this.frameWidth, this.frameHeight,
          x, y,
          width * this.scale, height * this.scale
        );
      } catch (e) {
        // Silent fail for magic effect
      }
      ctx.globalAlpha = 1;
    }

    ctx.restore();
  }
}

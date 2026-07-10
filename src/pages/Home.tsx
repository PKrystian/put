import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { useDocumentMeta } from '../lib/seo';

const REPO_URL = 'https://github.com/PKrystian/put';
const KOFI_URL = 'https://ko-fi.com/krystianpinczak';

const Icon: React.FC<{ icon: any; size?: number; className?: string }> = ({ icon: I, ...p }) => {
  const C = I as any;
  return <C {...p} />;
};

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const Card: React.FC<{
  title: string;
  delay: number;
  children: React.ReactNode;
}> = ({ title, delay, children }) => (
  <motion.section
    {...fade}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className="mt-6 rounded-xl border border-[#262626] bg-[#171717] p-5"
  >
    <h2 className="text-base font-semibold text-white">{title}</h2>
    <div className="mt-3 text-sm leading-relaxed text-gray-400">{children}</div>
  </motion.section>
);

const Home: React.FC = () => {
  useDocumentMeta(
    '',
    'Notatki z wykładów, laboratoriów i ćwiczeń: Politechnika Poznańska, studia II stopnia, Zaawansowane Technologie Internetowe (ZTI).'
  );
  const isPolishVisitor =
    typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('pl');

  return (
    <div>
      <motion.div {...fade} transition={{ duration: 0.5, ease: 'easeOut' }}>
        <h1 className="text-4xl font-bold text-white sm:text-5xl">PUT Notes</h1>
        <p className="mt-4 max-w-xl text-lg text-gray-400">
          Notatki z wykładów, laboratoriów i ćwiczeń dla studentów informatyki II stopnia
          (Zaawansowane Technologie Internetowe). <br></br>
          Wybierz przedmiot z panelu po lewej i zacznij przeglądać materiały.
        </p>
      </motion.div>

      {!isPolishVisitor && (
        <motion.div
          {...fade}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="mt-8 flex items-start gap-3 rounded-xl border border-[#262626] bg-[#171717] p-4"
        >
          <Icon icon={FaGlobe} size={16} className="mt-0.5 shrink-0 text-gray-400" />
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-gray-200">Heads up:</span> this site hosts personal
            course notes for the ZTI (Advanced Internet Technologies) Master&apos;s program in
            Computer Science at Poznań University of Technology. It is only useful to PUT students
            in that programme, and all content is written in{' '}
            <span className="text-gray-200">Polish</span>, since that&apos;s the language the
            courses are taught in.
          </p>
        </motion.div>
      )}

      <Card title="O projekcie" delay={0.4}>
        <p>
          PUT Notes to prywatny, niekomercyjny projekt tworzony przeze mnie, studenta informatyki
          (ZTI) na Politechnice Poznańskiej. <br></br> Powstał po to, żeby zebrać notatki z różnych zajęć w
          jednym miejscu i ułatwić powtórki przed kolokwiami oraz egzaminami.
        </p>
        <p className="mt-3">To nie jest oficjalny serwis Politechniki Poznańskiej.</p>
      </Card>

      <Card title="Jak powstają notatki?" delay={0.45}>
        <p>
          Sylabusy pochodzą z USOSweb. Same notatki są tworzone przy pomocy AI na podstawie dwóch
          źródeł:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>moich prywatnych notatek z zajęć,</li>
          <li>transkrypcji wykładów lub laboratoriów.</li>
        </ul>
        <p className="mt-3">
          Ze względu na ochronę prywatności i przepisy RODO materiały źródłowe nie są nigdzie
          publikowane. <br></br> Na stronie udostępniane są wyłącznie opracowane notatki. <br></br> Dla niektórych
          przedmiotów znajdziesz również slajdy, pliki PDF lub odnośniki do repozytoriów z kodem.
        </p>
      </Card>

      <Card title="Ważna informacja" delay={0.5}>
        <p>
          Notatki mogą zawierać błędy, nieścisłości lub pominięcia.<br></br> Traktuj je jako materiał
          pomocniczy, a nie oficjalne opracowanie. <br></br> Przed kolokwium lub egzaminem warto porównać je
          z materiałami prowadzącego i oficjalnymi materiałami z zajęć. <br></br> Powodzonka!
        </p>
      </Card>

      <Card title="Chcesz pomóc?" delay={0.55}>
        <p>
          Znalazłeś błąd, nieaktualną informację albo brakuje notatek z jakiegoś tematu? <br></br> Każde
          zgłoszenie jest mile widziane. <br></br> Możesz otworzyć Issue lub wysłać Pull Request w
          repozytorium.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[#111111]"
          >
            <Icon icon={FaGithub} size={14} />
            Repozytorium na GitHubie
          </a>
          <a
              href={KOFI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#262626] px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:border-[#3a3a3a] hover:text-white"
          >
            Postaw mi kawę
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Home;

export default function PrivacyPolicyPT() {
  return (
    <article className="py-8 mx-auto mt-10 max-w-md">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>

      <div className="space-y-6">
        <p>Data efetiva: 11/11/23</p>

        <section>
          <h2 className="text-2xl font-semibold mb-2">1. Introdução</h2>
          <p>
            Esta Política de Privacidade se aplica a todos os sites gerenciados
            pela <em>Zoonk Tecnologia e Educação Ltda.</em>, incluindo - mas não
            limitado a - UneeBee, Wikaro, Wisek e Ikidoo, detalhando como
            coletamos, usamos e protegemos suas informações pessoais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Coleta de Dados</h2>
          <p>Coletamos as seguintes informações quando você se registra:</p>
          <ul className="py-4 list-disc">
            <li>Nome completo</li>
            <li>Data de nascimento</li>
            <li>Endereço de email</li>
            <li>Foto do perfil</li>
          </ul>

          <p>
            Além disso, coletamos dados sobre suas interações no site, idioma
            preferido e endereço IP para fins de segurança. Usamos{" "}
            <a className="text-blue-600 underline" href="https://plausible.io">
              Plausible
            </a>{" "}
            para análise, que rastreia páginas visitadas, referências e
            localização, sem usar cookies ou rastrear informações pessoais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            3. Uso dos Dados Coletados
          </h2>
          <p>
            Seus dados são usados para melhorar a experiência do usuário e para
            fins de feedback. Os endereços de email são usados para notificações
            essenciais e, com consentimento explícito, para comunicações de
            marketing. Não compartilhamos seus dados com terceiros.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            4. Direitos do Usuário
          </h2>
          <p>
            Você tem o direito de atualizar seus dados a qualquer momento na
            seção “Configurações”. Você pode solicitar a exclusão de dados
            entrando em contato com contato@zoonk.org. Observe que não
            oferecemos opções de recusar o nosso rastreamento de análise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Segurança de Dados</h2>
          <p>
            Suas senhas são criptografadas, mas outros dados não são
            criptografados. No caso de uma violação de dados, informaremos
            prontamente os usuários afetados.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Retenção de Dados</h2>
          <p>
            Seus dados são retidos apenas enquanto sua conta estiver ativa. Após
            a exclusão da conta, todos os dados associados são permanentemente
            apagados sem qualquer possibilidade de recuperação.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            7. Atualizações da Política
          </h2>
          <p>
            Podemos atualizar esta política para refletir mudanças em nossas
            práticas. Sempre que fizermos alterações significativas,
            notificaremos você por email.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            8. Informações de Contato
          </h2>
          <p>
            Para qualquer dúvida sobre esta política, entre em contato conosco
            em contato@zoonk.org.
          </p>
        </section>
      </div>
    </article>
  );
}

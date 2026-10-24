# Verificação — 19 de outubro de 2026

Testes automatizados no Microsoft Edge instalado no Windows, usando Playwright apenas durante o desenvolvimento.

- Fluxo completo das seis áreas, com todos os 18 resultados e os seis roteiros para ideias próprias.
- Fotografias carregadas e decodificadas em todas as áreas, com créditos locais.
- Validação de seleção ausente e resposta contendo apenas espaços.
- Limite de 800 e contador; texto digitado preservado ao rever a escolha e ao voltar da biografia.
- Texto contendo marcação HTML exibido literalmente, sem criar elementos ou executar código.
- Respostas removidas por Início, Explorar outra área e recarga da página.
- Teclado: Tab, Espaço, setas dos controles de seleção e Enter; foco no título ao mudar de tela.
- Larguras de 360, 390, 768, 1024 e 1440 pixels; todas as áreas e etapas sem rolagem horizontal.
- Abertura direta por `file://` com o navegador em modo offline; nenhuma requisição HTTP externa durante a experiência.
- Servidor HTTP local: menu, missão, resultado e fotografia funcionando.
- Nenhum erro de JavaScript ou de console nos testes.
- Revisão visual de capturas do menu em computador/celular e do perfil de Julia Morgan.

## Instalador

Atualização v1.1.1 — 20 de outubro de 2026: distribuição padronizada por produto, versão e plataforma, em uma pasta por versão. Compilação, testes e publicação leem a mesma configuração. Verificado o pacote Windows com exatamente o instalador identificado pela versão e `Instalacao.txt`.

Incluído `VoceInventora.exe`, compilado e incorporado ao instalador. Os atalhos apontam para esse aplicativo, que localiza Edge/Chrome explicitamente e usa uma janela de aplicativo; não usa a associação de arquivos HTML. Verificadas instalação em caminho com espaços, integridade do executável, detecção de navegador e URI local codificada.

Atualização v1.0.1: ícone fornecido pelo responsável aplicado ao cabeçalho, favicon, executável e atalhos. Verificação do campo `IconLocation` dos dois atalhos e das sete resoluções do ICO. O conteúdo visual do PNG original foi preservado.

Os executáveis Windows foram compilados com o .NET Framework, com o conteúdo da aplicação incorporado ao instalador. Testado com destino e pastas de atalhos isolados: saída 0, conteúdo presente e atalhos `.lnk` apontando para `VoceInventora.exe`. O teste não altera a Área de Trabalho real. A abertura automática da janela após a instalação foi desativada no teste; o modo de diagnóstico do executável verificou o navegador e o comando de abertura.

## Limites da verificação

Não foi realizado teste presencial em celulares/tablets, com leitor de tela, nem uma auditoria completa de acessibilidade. A simulação de tamanhos e os controles semânticos não substituem esses testes. Não havia XAMPP em execução: foi verificado o mesmo conteúdo estático em um servidor HTTP local. O instalador foi testado neste Windows; não foi testado em outra máquina nem em máquinas gerenciadas pela faculdade. Não possui assinatura digital. Requer .NET Framework 4.x disponível no Windows e navegador atual; não exige Node, npm ou acesso à internet.

Para reproduzir os testes, consulte `README.md`. Capturas e relatório JSON são gerados em `test-results/`, fora do pacote de apresentação.

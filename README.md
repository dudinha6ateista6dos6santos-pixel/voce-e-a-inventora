# Você é a inventora!

Experiência educativa para a Semana da Tecnologia: seis áreas, seis missões fictícias, 18 soluções com resultados próprios, ideias livres e seis mulheres reais da ciência e tecnologia. HTML, CSS e JavaScript puro; sem serviços externos, banco de dados, cookies ou armazenamento de respostas.

## Abrir e apresentar

Abra `index.html` no Edge, Chrome ou Firefox atual. Não é preciso instalar Node, pacotes ou XAMPP. Todos os recursos visuais e textos estão nesta pasta. Os links de referências são opcionais e precisam de internet. Use F11 para tela cheia; para sair, pressione F11 novamente.

No Windows 10 ou 11, utilize `VoceInventora-1.1.1-Windows.zip`. O pacote contém o instalador completo `VoceInventora-1.1.1-Windows-Setup.exe` e `Instalacao.txt`. Extraia o ZIP e execute o instalador.

O instalador inclui todos os conteúdos, fotografias, ícones e o aplicativo `VoceInventora.exe`. Instala em `%LOCALAPPDATA%\VoceInventora` e cria atalhos na Área de Trabalho e no Menu Iniciar que abrem esse executável. Ele localiza Edge ou Chrome e abre a experiência em uma janela própria, sem depender do programa associado a `.html`. Não exige administrador, VS Code, XAMPP, Node ou pacotes. Exige Windows com .NET Framework 4.x e Edge ou Chrome disponível. O conteúdo funciona offline. O instalador não possui assinatura digital; políticas do Windows ou da faculdade podem impedir sua execução.

Para remover a instalação, feche a aplicação, apague a pasta `%LOCALAPPDATA%\VoceInventora`, o atalho da Área de Trabalho e a pasta “Você é a inventora” do Menu Iniciar. Não há serviço em segundo plano nem registro de respostas.

## Usar no XAMPP

1. Copie a pasta `voce-inventora` inteira para `C:\xampp\htdocs\`.
2. Inicie o Apache no painel do XAMPP.
3. Abra `http://localhost/voce-inventora/`.

Não é necessário PHP nem MySQL. A aplicação não envia respostas ao Apache. Atualizar a página, clicar em Início ou explorar outra área limpa as respostas. Voltar dentro da mesma missão preserva a escolha e a ideia atual. O limite de 800 segue a contagem nativa do JavaScript e do campo HTML (emojis podem ocupar mais de uma unidade).

## Editar conteúdo

Edite `js/content.js`, salvo em UTF-8. `window.INVENTORA.areas` contém objetos com `id`, `name`, `color`, `tint`, `icon`, `description`, `mission`, `alternatives` e `woman`. Cada alternativa tem título, resumo, funcionamento, benefícios, limitações, cuidados e pergunta de reflexão. `ownGuide` contém o roteiro para desenvolver ideias próprias.

Para adicionar uma área, acrescente um objeto com a mesma estrutura e um `id` exclusivo. A interface gera os cartões e as telas automaticamente. Escolha um ícone já definido em `js/app.js` ou acrescente seu desenho SVG em `paths`. O texto “6 áreas” na página inicial e este documento devem ser atualizados se a quantidade mudar.

## Fotografias e fontes

Coloque novas fotografias autorizadas em `assets/images/`, atualize `woman.image` e os registros em `js/photo-credits.js`, `assets/images/credits.json` e `FONTES.md`. Registre autor, instituição, URL original, licença e alterações. Não use imagens geradas como registros históricos. Verifique a licença do arquivo específico, não apenas a do site.

Os desenhos de interface são SVGs locais e símbolos do sistema. As fontes tipográficas são do sistema. A biografia não muda de acordo com a escolha: sua conexão com cada missão é explicitada sem atribuir todas as alternativas à mulher apresentada.

O ícone oficial fornecido pelo responsável pelo projeto está em `assets/icons/inventora.png`. A versão `inventora.ico`, usada na aba do navegador, no executável e nos atalhos, inclui sete resoluções. Depois de substituir o PNG por uma nova imagem quadrada, execute `tools/build-icon.ps1` antes de gerar novamente o instalador. Reinstale a versão atualizada para renovar os atalhos existentes.

## Desenvolvimento e verificação

Na raiz do repositório, `npm ci` instala apenas as ferramentas de desenvolvimento. `npm test` usa o Edge instalado e testa os fluxos com Playwright. Isso não é necessário para utilizar ou apresentar a aplicação. O teste cria capturas e um relatório em `test-results/`.

Para gerar os pacotes e o instalador, execute na raiz `powershell -NoProfile -ExecutionPolicy Bypass -File tools/build-installer.ps1` em Windows com .NET Framework 4.x e seu compilador C#. A saída fica em `entrega/<versão>/`. Os nomes seguem `VoceInventora-<versão>-Windows-Setup.exe`, `VoceInventora-<versão>-Windows.zip` e `VoceInventora-<versão>-Web.zip`; a versão vem de `package.json`. O instalador utiliza o .NET Framework do Windows e Edge/Chrome. A ferramenta `tools/download-photos.cjs` atualiza imagens e metadados a partir de Wikimedia Commons e exige internet somente durante essa manutenção.

Consulte `VERIFICACAO.md` para o escopo e as limitações dos testes realizados.

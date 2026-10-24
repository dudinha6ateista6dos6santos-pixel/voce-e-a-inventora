/* Conteúdo editorial independente da interface. Não usa rede ou armazenamento. */
'use strict';

window.INVENTORA = {
  ownGuide: [
    ['Materiais', 'De quais materiais, conhecimentos e recursos sua proposta precisa?'],
    ['Funcionamento', 'Qual seria o primeiro passo? O que acontece depois?'],
    ['Acessibilidade', 'Pessoas com diferentes necessidades conseguiriam usar sua solução?'],
    ['Impacto', 'Quem seria beneficiado? Que custos, resíduos ou novos problemas poderiam surgir?'],
    ['Teste', 'Como montar um pequeno protótipo seguro e comparar o antes e o depois?']
  ],

  areas: [
    {
      id: 'saude',
      name: 'Saúde',
      color: '#D95D76',
      tint: '#FCE8ED',
      icon: 'heart-pulse',
      description: 'Tecnologia, saúde e cuidado com as pessoas.',

      mission: {
        title: 'Um olhar para o futuro',
        context: 'Dona Helena adora ler e cuidar do jardim, mas, com o passar dos anos, sua visão ficou cada vez mais embaçada. Ela descobriu que tem catarata, uma condição que pode comprometer a visão e que, em muitos casos, pode ser tratada com cirurgia.',
        problem: 'O desafio: como a tecnologia pode ajudar a tornar o tratamento da catarata mais preciso e contribuir para recuperar a visão?',
        question: 'Que solução você criaria para ajudar Dona Helena e outras pessoas com dificuldades para enxergar?'
      },

      alternatives: [
        {
          title: 'Técnica cirúrgica a laser',
          description: 'Desenvolver ou aprimorar uma técnica que use laser para ajudar no tratamento da catarata.',
          how: 'A equipe médica estudaria a técnica, avaliaria sua segurança e realizaria testes antes de qualquer uso clínico.',
          benefits: 'Pode contribuir para tratamentos mais precisos e para a recuperação da visão.',
          limits: 'Exige profissionais especializados, equipamentos adequados e avaliação médica.',
          care: 'Qualquer procedimento precisa passar por testes rigorosos e seguir as regras de segurança da área da saúde.',
          reflection: 'Como você verificaria se a técnica é segura e ajuda os pacientes?'
        },
        {
          title: 'Aplicativo para ampliar textos e imagens',
          description: 'Criar um aplicativo que aumente letras, imagens e outros elementos na tela de um celular ou tablet.',
          how: 'O usuário apontaria a câmera para um texto ou imagem e ajustaria o tamanho para facilitar a leitura.',
          benefits: 'Pode ajudar em tarefas diárias e tornar textos mais fáceis de ler.',
          limits: 'Não trata a catarata nem substitui uma consulta com um profissional de saúde.',
          care: 'O aplicativo deve ter controles simples, boa leitura em voz alta e opções acessíveis.',
          reflection: 'Como você faria o aplicativo funcionar para pessoas com diferentes necessidades visuais?'
        },
        {
          title: 'Equipamento para exames dos olhos',
          description: 'Criar ou melhorar um equipamento que ajude profissionais a examinar os olhos e identificar problemas de visão.',
          how: 'O equipamento coletaria informações que seriam avaliadas por um profissional de saúde.',
          benefits: 'Pode ajudar a identificar problemas e apoiar o atendimento.',
          limits: 'Precisa de testes, manutenção e profissionais capacitados para interpretar os resultados.',
          care: 'Os resultados não devem ser usados para dar um diagnóstico sem avaliação profissional.',
          reflection: 'Que informações o equipamento precisaria coletar para ajudar no exame?'
        }
      ],

      woman: {
        name: 'Patricia Bath',
        field: 'Oftalmologia e inovação médica',
        years: '1942–2019',
        image: 'patricia.jpg',
        bio: 'Patricia Bath foi uma médica e pesquisadora norte-americana que trabalhou para ampliar o acesso à saúde dos olhos.',
        contribution: 'Desenvolveu a sonda Laserphaco, uma tecnologia que utiliza laser no tratamento da catarata.',
        impact: 'Seu trabalho ajudou a ampliar as possibilidades de tratamento da catarata e destacou a importância de tornar o cuidado com a visão mais acessível.',
        connection: 'Sua trajetória mostra como ciência, medicina e tecnologia podem se unir para enfrentar problemas que afetam a vida das pessoas.',
        encouragement: 'Observe um problema real, pesquise como ele afeta as pessoas e pense em uma solução segura e acessível.',
        sources: [
           ['National Women’s History Museum', 'https://www.womenshistory.org/education-resources/biographies/patricia-bath'],
           ['MIT — Lemelso', 'https://lemelson.mit.edu/resources/patricia-bath']
        ]
      }
    },

    {
      id: 'pericia',
      name: 'Perícia',
      color: '#6878C5',
      tint: '#EAEDFC',
      icon: 'search',
      description: 'Investigação científica, DNA e análise de evidências.',

      mission: {
        title: 'O mistério do DNA',
        context: 'Em uma investigação fictícia, a polícia encontra um fio de cabelo e um fragmento de unha em um local onde aconteceu um crime. Não há testemunhas que saibam identificar quem esteve ali.\n\n'+
        'Com o avanço da genética e da tecnologia forense, cientistas podem analisar o DNA de determinadas amostras para buscar pistas sobre uma pessoa. Mas será que é possível descobrir exatamente como ela é apenas pelo DNA?',
        problem: 'Como a análise do DNA pode ajudar uma investigação sem transformar uma pista em uma conclusão precipitada?',
        question: 'Que métodos científicos você usaria para analisar os vestígios e avaliar as pistas encontradas?'
      },

      alternatives: [
        {
          title: 'Análise de DNA',
          description: 'Analisar o material genético encontrado nos vestígios e comparar os resultados com amostras obtidas legalmente.',
          how: 'Uma equipe especializada coletaria e examinaria as amostras em laboratório, seguindo procedimentos para evitar contaminação.',
          benefits: 'Pode ajudar a relacionar um vestígio a uma pessoa ou a excluir uma possível relação.',
          limits: 'Uma amostra pequena ou degradada pode não fornecer resultados suficientes.',
          care: 'É essencial preservar as amostras, registrar sua origem e respeitar a privacidade e as regras legais.',
          reflection: 'Que cuidados evitariam que uma amostra fosse contaminada ou trocada?'
        },
        {
          title: 'Fenotipagem forense por DNA',
          description: 'Estudar características que certos métodos científicos podem estimar a partir do DNA, como algumas características físicas.',
          how: 'Especialistas analisariam marcadores genéticos e explicariam quais características podem ser estimadas e com que grau de incerteza.',
          benefits: 'Pode oferecer pistas adicionais quando outras informações são limitadas.',
          limits: 'As estimativas não determinam uma aparência exata nem identificam, sozinhas, uma pessoa.',
          care: 'Os resultados precisam ser apresentados com suas limitações e não devem ser tratados como prova definitiva.',
          reflection: 'Por que uma estimativa de aparência não é o mesmo que uma identificação?'
        },
        {
          title: 'Reconstrução facial e outras evidências',
          description: 'Usar informações disponíveis para produzir uma representação aproximada e compará-la com outras pistas da investigação.',
          how: 'A equipe reuniria dados relevantes, explicaria as incertezas e verificaria se as informações combinam com outras evidências.',
          benefits: 'Pode ajudar a organizar pistas e orientar novas perguntas para a investigação.',
          limits: 'Uma reconstrução é uma representação aproximada e pode não corresponder ao rosto real de uma pessoa.',
          care: 'Não se deve concluir que alguém participou de um crime apenas por uma imagem, semelhança ou estimativa.',
          reflection: 'Que outras evidências seriam necessárias antes de chegar a uma conclusão?'
        }
      ],
woman: {
  name: 'Frances Glessner Lee',
  field: 'Ciência forense e investigação de mortes',
  years: '1878–1962',
  image: 'frances-lee.jpg',
  bio: 'Frances Glessner Lee foi uma pesquisadora norte-americana que se dedicou ao desenvolvimento da medicina legal. Em uma época em que a investigação de mortes ainda enfrentava limitações técnicas, ela ajudou a fortalecer o estudo sistemático das evidências encontradas em locais de morte.',
  contribution: 'Ela criou modelos em miniatura extremamente detalhados de cenas de morte, conhecidos como Nutshell Studies of Unexplained Death. Esses modelos eram usados para treinar investigadores a observar os detalhes, registrar evidências e reconstruir acontecimentos sem tirar conclusões precipitadas.',
  impact: 'Seu trabalho contribuiu para o ensino da investigação forense e para o desenvolvimento de métodos mais cuidadosos de observação de cenas. Sua trajetória é lembrada pela importância de examinar evidências de maneira organizada e imparcial.',
  connection: 'Na missão do mistério do DNA, os investigadores precisam observar, preservar e analisar vestígios antes de formular hipóteses. O trabalho de Frances Glessner Lee mostra que uma investigação confiável depende tanto da atenção aos detalhes quanto do cuidado para não confundir uma pista com uma prova definitiva. Ela não foi uma especialista em DNA; sua contribuição esteve principalmente no treinamento e na análise de cenas de morte.',
  encouragement: 'Observe os detalhes, registre o que encontrar e lembre-se: uma boa investigação exige evidências, paciência e cuidado.',
  sources: [
    ['The Boston Globe', 'https://www.bostonglobe.com/2024/08/14/special-projects/the-woman-who-revolutionized-forensic-science/'],
    ['Frances Glessner Lee', 'https://pt.wikipedia.org/wiki/Frances_Glessner_Lee']
  ]
}
    },

    {
      id: 'matematica',
      name: 'Matemática',
      color: '#7B61A8',
      tint: '#F0EAF9',
      icon: 'calculator',
      description: 'Cálculos, modelos e resolução de problemas.',

      mission: {
        title: 'O caminho até as estrelas',
        context: 'Uma equipe de cientistas está planejando enviar uma pequena sonda para estudar um planeta distante. Para que ela chegue ao destino, é necessário prever sua trajetória e calcular como a gravidade dos corpos celestes pode influenciar seu caminhon.\n\n'+
        'Os computadores conseguem realizar cálculos rapidamente, mas a equipe precisa compreender os resultados e verificar se as previsões fazem sentido.',
        problem: 'Como usar a matemática para calcular e verificar uma trajetória que ajude a sonda a chegar ao destino?',
        question: 'Que cálculos, simulações ou observações você usaria para planejar a viagem?'
      },

      alternatives: [
        {
          title: 'Simulação da trajetória',
          description: 'Criar uma simulação que mostre como a sonda se movimenta sob a influência da gravidade.',
          how: 'A equipe construiria um modelo matemático, inseriria os dados disponíveis e observaria diferentes trajetórias.',
          benefits: 'Permite comparar possibilidades sem precisar realizar cada teste no espaço.',
          limits: 'Uma simulação depende da qualidade dos dados e das hipóteses usadas no modelo.',
          care: 'É importante comparar os resultados do modelo com dados confiáveis e considerar possíveis erros.',
          reflection: 'Quais informações você precisaria conhecer antes de simular a trajetória?'
        },
        {
          title: 'Cálculos e verificação',
          description: 'Usar cálculos matemáticos para estimar distâncias, velocidades, tempos e mudanças no movimento.',
          how: 'A equipe organizaria os dados, escolheria as fórmulas adequadas e verificaria os cálculos antes de tomar decisões.',
          benefits: 'Ajuda a planejar a viagem e identificar resultados que não parecem coerentes.',
          limits: 'Erros nos dados ou nas contas podem alterar as previsões.',
          care: 'Os cálculos devem ser conferidos por métodos independentes sempre que possível.',
          reflection: 'Como você verificaria se um cálculo está correto antes de usá-lo?'
        },
        {
          title: 'Observação e análise de dados',
          description: 'Reunir dados sobre o movimento dos corpos celestes e usá-los para melhorar o planejamento da trajetória.',
          how: 'A equipe analisaria observações, procuraria padrões e compararia os dados com as previsões matemáticas.',
          benefits: 'Pode ajudar a melhorar os modelos e reduzir incertezas.',
          limits: 'As observações podem conter falhas ou não incluir todas as informações necessárias.',
          care: 'É importante registrar a origem dos dados e reconhecer o que ainda não se sabe.',
          reflection: 'Como novas observações poderiam mudar a trajetória planejada?'
        }
      ],

    woman: {
        name: 'Katherine Johnson',
        field: 'Matemática e computação espacial',
        years: '1918–2020',
        image: 'katherine.jpg',
        bio: 'Katherine Johnson foi uma matemática norte-americana que trabalhou na NACA e, posteriormente, na NASA, em uma época marcada pela segregação racial nos Estados Unidos.',
        contribution: 'Ela realizou cálculos fundamentais para trajetórias de voos espaciais e conferiu os cálculos feitos por computadores para o voo orbital de John Glenn, em 1962. Seu trabalho ajudou a garantir maior confiança nos cálculos necessários para a missão.',
        impact: 'Sua atuação contribuiu para o avanço da exploração espacial e mostrou como o conhecimento matemático é essencial para transformar ideias científicas em missões reais. Sua trajetória também abriu caminhos e inspirou outras mulheres, especialmente mulheres negras, na ciência.',
        connection: 'Antes de uma missão espacial, cientistas precisam calcular trajetórias, velocidades e posições para prever onde uma nave estará em determinado momento. Com a matemática e a tecnologia, é possível transformar observações e dados em previsões que ajudam a explorar o espaço com mais segurança.',
        encouragement: 'Uma boa investigação começa com curiosidade e cresce quando você confere as evidências.',
        sources: [
           ['NASA — Katherine Johnson', 'https://science.nasa.gov/people/katherine-johnson/']
        ]
      }
    },
    {
      id: 'engenharia-trafego',
      name: 'Engenharia de Tráfego',
      color: '#477DA8',
      tint: '#E7F1F9',
      icon: 'traffic-cone',
      description: 'Mobilidade, segurança viária e sistemas inteligentes.',

      mission: {
        title: 'O alerta na rodovia',
        context: 'Em uma rodovia fictícia, os registros mostram que muitos acidentes acontecem em um trecho com curvas perigosas.\n\n'+
        'Alguns motoristas passam acima do limite de velocidade, e a equipe responsável nem sempre consegue identificar os riscos a tempo\n\n'+
        'A equipe precisa encontrar uma maneira de usar a tecnologia para identificar situações perigosas e ajudar a prevenir acidentes, sem depender apenas da fiscalização presencial.',
        problem: 'Como a tecnologia pode tornar essa rodovia mais segura?',
        question: 'Que sistema você criaria para identificar riscos e avisar os motoristas a tempo?'
      },

      alternatives: [
        {
          title: 'Radares inteligentes',
          description: 'Usar radares para medir a velocidade dos veículos e identificar situações que possam aumentar o risco de acidentes.',
          how: 'Os equipamentos coletariam dados sobre a velocidade e enviariam alertas quando fossem identificadas condições de risco.',
          benefits: 'Pode ajudar a identificar excesso de velocidade e apoiar ações de segurança viária.',
          limits: 'Um radar não consegue prever todos os acidentes nem explicar sozinho todas as causas de risco.',
          care: 'Os equipamentos precisam ser calibrados e usados de acordo com as regras de trânsito e de proteção de dados.',
          reflection: 'Que informações um radar precisaria analisar para ajudar a prevenir acidentes?'
        },
        {
          title: 'Sensores e alertas de risco',
          description: 'Instalar sensores que monitorem condições da rodovia, como fluxo de veículos, chuva ou obstáculos.',
          how: 'Os sensores enviariam informações para um sistema que analisaria as condições e poderia emitir alertas.',
          benefits: 'Pode ajudar a avisar sobre mudanças nas condições da estrada e permitir uma resposta mais rápida.',
          limits: 'Sensores podem falhar ou gerar alertas incorretos se os dados forem incompletos.',
          care: 'Os alertas devem ser claros, confiáveis e projetados para não distrair os motoristas.',
          reflection: 'Como você evitaria que um alerta falso confundisse quem está dirigindo?'
        },
        {
          title: 'Câmeras e análise de dados',
          description: 'Usar câmeras e dados do trânsito para observar o fluxo de veículos e identificar padrões associados a riscos.',
          how: 'O sistema analisaria informações sobre o trânsito e enviaria avisos quando encontrasse uma situação que precisasse de atenção.',
          benefits: 'Pode ajudar a detectar congestionamentos, veículos parados e outras situações que exigem cuidado.',
          limits: 'A qualidade das análises depende dos dados, das condições das câmeras e do sistema usado.',
          care: 'É necessário respeitar a privacidade das pessoas e limitar o uso das imagens ao objetivo previsto.',
          reflection: 'Como você usaria os dados para aumentar a segurança sem invadir a privacidade?'
        }
      ],

woman: {
  name: 'Jane Jacobs',
  field: 'Planejamento urbano, mobilidade e vida nas cidades',
  years: '1916–2006',
  image: 'Jane_Jacobs.jpg',
  bio: 'Jane Jacobs foi uma escritora e ativista norte-americana-canadense que questionou modelos de planejamento urbano que priorizavam grandes vias e a separação dos bairros. Ela defendia cidades pensadas para as pessoas que vivem, caminham e convivem nelas.',
  contribution: 'Ela destacou a importância de ruas movimentadas, calçadas seguras, bairros diversos e participação dos moradores nas decisões urbanas. Suas ideias influenciaram debates sobre como organizar ruas e espaços públicos para favorecer a vida cotidiana.',
  impact: 'Seu trabalho ajudou a mudar a forma como urbanistas e comunidades discutem o planejamento das cidades, valorizando a escala humana e os efeitos das grandes obras viárias sobre os bairros.',
  connection: 'Na missão sobre segurança nas rodovias e no trânsito, sua história ajuda a pensar além dos veículos: o planejamento também precisa considerar pedestres, ciclistas, moradores e a segurança de todos. Ruas e transportes devem atender às necessidades das pessoas, não apenas facilitar o fluxo de carros.',
  encouragement: 'Observe sua rua: como ela poderia ser mais segura e agradável para quem caminha, pedala ou usa o transporte público?',
  sources: [
    ['Jane Jacobs Walk — Meet Jane Jacobs', 'https://www.janejacobswalk.org/about-jane-jacobs-walk/meet-jane-jacobs'],
    ['PPS — Jane Jacobs', 'https://www.pps.org/article/jjacobs-2'],
    ['Wikipedia — Jane Jacobs', 'https://www.wikipedia.org/wiki/Jane_Jacobs']
  ]
}
    },

    {
      id: 'agronegocio',
      name: 'Agronegócio',
      color: '#67964B',
      tint: '#EDF5E6',
      icon: 'sprout',
      description: 'Agricultura, drones e uso inteligente de recursos.',

      mission: {
        title: 'O campo visto do céu',
        context: 'Em uma grande plantação fictícia, algumas regiões começaram a apresentar folhas amareladas e crescimento irregular.\n\n'+
         ' A equipe ainda não sabe se o problema é falta de água, pragas ou deficiência de nutrientes. Examinar cada parte da plantação manualmente levaria dias.',
        problem: 'Como descobrir onde está o problema antes que ele prejudique toda a colheita?',
        question: 'Que solução você criaria para ajudar o agricultor a cuidar da plantação de forma mais precisa?'
      },

      alternatives: [
        {
          title: 'Drones para observar a plantação',
          description: 'Usar drones para obter imagens da plantação e identificar áreas que precisam de mais atenção.',
          how: 'O drone coletaria imagens que seriam analisadas para observar diferenças no crescimento e possíveis sinais de problemas.',
          benefits: 'Pode ajudar a observar áreas grandes com rapidez e orientar o trabalho no campo.',
          limits: 'As imagens não identificam todos os problemas e precisam ser interpretadas corretamente.',
          care: 'O uso de drones deve respeitar as regras de operação e a segurança das pessoas.',
          reflection: 'Que sinais nas imagens poderiam indicar que uma parte da plantação precisa de cuidados?'
        },
        {
          title: 'Sensores no solo e análise de dados',
          description: 'Instalar sensores para acompanhar condições do solo, como umidade, e usar os dados para planejar os cuidados.',
          how: 'Os sensores registrariam informações que ajudariam o agricultor a decidir quando e onde agir.',
          benefits: 'Pode reduzir o desperdício de água e ajudar a direcionar melhor os recursos.',
          limits: 'Os sensores precisam estar bem instalados, calibrados e em boas condições.',
          care: 'É importante verificar os dados e considerar as características de cada plantação.',
          reflection: 'Como os dados de um sensor poderiam ajudar a decidir quando irrigar?'
        },
        {
          title: 'Aplicação localizada de recursos',
          description: 'Usar dados da plantação para aplicar água, fertilizantes ou outros recursos apenas onde forem necessários.',
          how: 'O agricultor combinaria observações, sensores e mapas para orientar a aplicação em diferentes áreas.',
          benefits: 'Pode reduzir desperdícios e diminuir impactos ambientais.',
          limits: 'O sistema depende de dados confiáveis e de equipamentos adequados.',
          care: 'A aplicação deve seguir orientações técnicas e regras de segurança ambiental.',
          reflection: 'Como você compararia o uso de recursos antes e depois dessa solução?'
        }
      ],

      woman: {
        name: 'Yessica Yana',
        field: 'Agronomia e agricultura de precisão',
        years: '',
        image: 'yessica-yana.jpg',
        bio: 'Yessica Yana é uma engenheira agrônoma boliviana de origem indígena Aymara, conhecida por utilizar drones e tecnologias de agricultura de precisão para apoiar o trabalho no campo.',
        contribution: 'Sua atuação demonstra como drones podem ajudar a observar plantações, acompanhar as condições das culturas e obter informações que auxiliam o planejamento agrícola.',
        impact: 'O uso de ferramentas digitais na agricultura pode ajudar produtores a identificar problemas mais cedo, direcionar recursos e reduzir desperdícios. Também mostra como a inovação pode ser aplicada em atividades essenciais para a alimentação da população.',
        connection: 'Assim como no desafio apresentado, drones e análise de dados podem ajudar a investigar problemas em uma plantação. As imagens fornecem pistas, mas precisam ser interpretadas junto a outras informações para que o produtor tome decisões adequadas.',
        encouragement: 'Observe as necessidades do ambiente, reúna informações e pense em maneiras de usar os recursos com mais cuidado.',
        sources: [
           ['Indígena - Yessica Yana', 'https://bio-emprender.iica.int/2023/09/20/yessica-yana-mujer-indigena-que-maneja-un-dron-para-hacer-mas-eficiente-la-agricultura-en-el-altiplano-de-bolivia/']
        ]
      }
    },

    {
      id: 'marketing',
      name: 'Marketing',
      color: '#C17A43',
      tint: '#FAEFE4',
      icon: 'chart-no-axes-combined',
      description: 'Comunicação, comportamento do consumidor e estratégias digitais.',

      mission: {
        title: 'O algoritmo das vendas',
        context: 'Uma pequena loja fictícia vende roupas pela internet.\n\n'+
        'Apesar de receber milhares de visitas, poucas pessoas finalizam as compras.\n\n'+
        'A equipe publica anúncios, mas não sabe quais produtos interessam a cada público nem por que tantos clientes abandonam o carrinho.',
        problem: 'Como usar a tecnologia para transformar visitas em vendas sem invadir a privacidade dos clientes?',
        question: 'Que solução você criaria para melhorar a experiência dos clientes sem deixar de respeitar suas escolhas e sua privacidade?'
      },

      alternatives: [
        {
          title: 'Análise de vendas e navegação',
          description: 'Analisar dados de vendas e de navegação para entender quais produtos despertam interesse.',
          how: 'A equipe observaria padrões gerais, compararia resultados e usaria as informações para melhorar a organização da loja.',
          benefits: 'Pode ajudar a entender as necessidades dos clientes e a planejar melhor as ofertas.',
          limits: 'Os dados passados não garantem o que os clientes vão querer no futuro.',
          care: 'A coleta e o uso de dados pessoais devem respeitar a privacidade e as regras aplicáveis.',
          reflection: 'Que dados seriam úteis para melhorar a loja sem coletar informações desnecessárias?'
        },
        {
          title: 'Recomendações personalizadas',
          description: 'Criar um sistema que recomende produtos com base nos interesses e nas escolhas dos clientes.',
          how: 'O sistema identificaria padrões relevantes e apresentaria sugestões que possam ajudar cada pessoa.',
          benefits: 'Pode facilitar a busca por produtos e tornar a navegação mais útil.',
          limits: 'As recomendações podem repetir sempre os mesmos tipos de produto ou deixar opções importantes de fora.',
          care: 'O cliente deve ter formas claras de controlar suas preferências e evitar recomendações indesejadas.',
          reflection: 'Como você faria recomendações úteis sem limitar as opções dos clientes?'
        },
        {
          title: 'Campanhas digitais interativas',
          description: 'Criar campanhas digitais com atividades e conteúdos que convidem as pessoas a conhecer os produtos.',
          how: 'A equipe desenvolveria conteúdos interativos e observaria quais formatos ajudam as pessoas a compreender melhor as ofertas.',
          benefits: 'Pode tornar a comunicação mais envolvente e facilitar o contato com o público.',
          limits: 'Uma campanha chamativa não garante que o produto seja adequado às necessidades do cliente.',
          care: 'As mensagens devem ser honestas, acessíveis e não manipular as pessoas para que comprem.',
          reflection: 'Como você criaria uma campanha interessante que também fosse clara e honesta?'
        }
      ],

      woman: {
        name: 'Sandra Turchi',
        field: 'Marketing digital e comércio eletrônico',
        years: '',
        image: 'sandra-turchi.jpg',
        bio: 'Sandra Turchi é uma especialista brasileira em marketing digital e comércio eletrônico. Atua como consultora, professora e autora, abordando as transformações que a internet e as novas tecnologias provocam na relação entre empresas e consumidores.',
        contribution: 'Seu trabalho ajuda empresas e profissionais a compreender como utilizar canais digitais, redes sociais e estratégias de comércio eletrônico para se comunicar com o público e desenvolver negócios.',
        impact: 'As ferramentas digitais mudaram a maneira como as pessoas descobrem produtos, comparam preços e realizam compras. O marketing passou a combinar criatividade, análise de dados e conhecimento sobre o comportamento dos consumidores.',
        connection: 'No desafio da loja virtual, a tecnologia permite analisar o comportamento dos visitantes, testar campanhas e compreender por que algumas compras não são concluídas. O objetivo é usar essas informações de maneira responsável para melhorar a experiência dos clientes e os resultados do negócio.',
        encouragement: 'Procure entender as necessidades das pessoas antes de propor uma campanha ou uma ferramenta digital.',
        sources: [
           ['Sandra Turchi', 'https://sandraturchi.com.br/']
        ]
      }
    },


        {
      id: 'engenharia-civil',
      name: 'Engenharia Civil',
      color: '#687985',
      tint: '#EAF0F3',
      icon: 'building-2',
      description: 'Construções, sensores e manutenção inteligente.',

      mission: {
        title: 'O prédio que prevê problemas',
        context: 'Um edifício fictício gasta muita energia, apresenta salas quentes demais e tem equipamentos que falham sem aviso. A equipe de manutenção só percebe alguns problemas quando alguém reclama ou quando algo deixa de funcionar.',
        problem: 'Como transformar o edifício em uma construção capaz de perceber e responder ao que acontece?',
        question: 'Que solução você criaria para acompanhar as condições do prédio e ajudar a prevenir falhas?'
      },

      alternatives: [
        {
          title: 'Sensores conectados',
          description: 'Instalar sensores para acompanhar condições da construção, como vibrações, temperatura e deformações.',
          how: 'Os sensores coletariam dados ao longo do tempo e enviariam informações para uma equipe responsável pela avaliação.',
          benefits: 'Pode ajudar a identificar mudanças que merecem uma inspeção.',
          limits: 'Os sensores não detectam todos os tipos de problema e podem apresentar falhas.',
          care: 'Os dados precisam ser avaliados por profissionais qualificados. Sensores não substituem inspeções de segurança.',
          reflection: 'Quais mudanças poderiam indicar que uma parte da construção precisa ser examinada?'
        },
        {
          title: 'Manutenção preditiva',
          description: 'Usar dados de inspeções e sensores para reconhecer sinais que podem indicar a necessidade de manutenção.',
          how: 'Um sistema analisaria os dados e destacaria situações que merecem uma verificação profissional.',
          benefits: 'Pode ajudar a planejar reparos e evitar que pequenos problemas passem despercebidos.',
          limits: 'Uma previsão pode estar errada se os dados forem insuficientes ou se o modelo não representar bem a construção.',
          care: 'Alertas devem ser verificados por profissionais antes de qualquer decisão sobre a segurança do prédio.',
          reflection: 'Como você verificaria se um alerta do sistema corresponde a um problema real?'
        },
        {
          title: 'Gêmeo digital da construção',
          description: 'Criar uma representação digital do prédio que reúna informações sobre sua estrutura e suas condições.',
          how: 'A equipe combinaria plantas, inspeções e dados de sensores para acompanhar a construção em um modelo digital.',
          benefits: 'Pode facilitar o acompanhamento das mudanças e o planejamento da manutenção.',
          limits: 'O modelo precisa ser atualizado e não representa perfeitamente todos os detalhes do prédio real.',
          care: 'As informações devem ser confiáveis e o modelo deve apoiar, não substituir, a avaliação técnica.',
          reflection: 'Que informações seriam importantes para manter o modelo digital atualizado?'
        }
      ],

      woman: {
        name: 'Burcin Becerik-Gerber',
        field: 'Engenharia civil e tecnologia na construção',
        years: '',
        image: 'burcin.jpg',
        bio: 'Burcin Becerik-Gerber é uma engenheira e pesquisadora reconhecida por seu trabalho com tecnologias aplicadas ao ambiente construído, incluindo sensores, sistemas inteligentes e uso de dados para compreender o funcionamento dos edifícios.',
        contribution: 'Sua pesquisa explora como informações coletadas em construções podem ajudar a melhorar o planejamento, a operação e a experiência das pessoas que utilizam esses espaços.',
        impact: 'Edifícios inteligentes podem monitorar condições ambientais, utilizar energia com mais eficiência e identificar sinais de problemas em equipamentos. A integração entre engenharia e tecnologia abre possibilidades para construções mais seguras, eficientes e confortáveis.',
        connection: 'No desafio do prédio inteligente, sensores conectados podem monitorar temperatura, presença e funcionamento dos equipamentos. A análise desses dados permite investigar desperdícios e identificar possíveis falhas antes que provoquem problemas maiores.',
        encouragement: 'Observe como uma construção funciona e pense em como os dados podem ajudar a torná-la mais segura.',
        sources: [
           ['Burcin Becerik-Gerber', 'https://viterbi.usc.edu/directory/faculty/Becerik-Gerber/Burcin']
        ]
      }
    },

    {
      id: 'biologia',
      name: 'Biologia',
      color: '#459B86',
      tint: '#E5F5EF',
      icon: 'dna',
      description: 'Seres vivos, genética e análise de dados biológicos.',

      mission: {
        title: 'O código escondido nas células',
        context: 'Em uma região fictícia, médicos identificaram vários casos de uma doença infecciosa. Os pesquisadores coletaram amostras do agente causador, mas precisam descobrir se os casos estão relacionados e como a doença pode estar se espalhando.',
        problem: 'Como transformar informações microscópicas em pistas capazes de ajudar a proteger uma população?',
        question: 'Que métodos você usaria para investigar os casos e ajudar a compreender a possível origem da infecção?'
      },

      alternatives: [
        {
          title: 'Sequenciamento genético',
          description: 'Analisar o material genético de amostras para estudar as características de um agente infeccioso.',
          how: 'Uma equipe especializada prepararia as amostras e usaria técnicas de laboratório para obter dados genéticos.',
          benefits: 'Pode ajudar a comparar amostras e estudar mudanças no material genético.',
          limits: 'Nem toda amostra fornece dados suficientes, e semelhanças genéticas não provam sozinhas como uma infecção foi transmitida.',
          care: 'A coleta e o processamento devem seguir protocolos de biossegurança e proteger os dados pessoais.',
          reflection: 'Que cuidados seriam necessários para comparar amostras de forma confiável?'
        },
        {
          title: 'Bioinformática e inteligência artificial',
          description: 'Usar programas para organizar e analisar grandes conjuntos de dados biológicos.',
          how: 'Os pesquisadores inseririam dados de qualidade em ferramentas computacionais para procurar padrões e comparar resultados.',
          benefits: 'Pode acelerar algumas análises e ajudar a encontrar padrões difíceis de perceber manualmente.',
          limits: 'Os resultados dependem da qualidade dos dados e dos métodos usados.',
          care: 'As conclusões devem ser revisadas por especialistas e não devem depender apenas de uma previsão automática.',
          reflection: 'Como você verificaria se um padrão encontrado pelo programa é confiável?'
        },
        {
          title: 'Monitoramento integrado',
          description: 'Reunir informações de exames, observações e registros de saúde para acompanhar a evolução dos casos.',
          how: 'A equipe organizaria dados relevantes e compararia as informações ao longo do tempo.',
          benefits: 'Pode ajudar a identificar tendências e apoiar decisões de saúde pública.',
          limits: 'Dados incompletos ou atrasados podem dificultar a interpretação dos resultados.',
          care: 'As informações devem ser protegidas, e decisões de saúde precisam de avaliação profissional.',
          reflection: 'Que tipos de informação ajudariam a compreender melhor a evolução dos casos?'
        }
      ],

      woman: {
        name: 'Pardis Sabeti',
        field: 'Genética e genômica computacional',
        years: '1975 - presente',
        image: 'pardis.jpg',
        bio: 'Pardis Sabeti é uma geneticista e pesquisadora que combina biologia, genética e computação para estudar a evolução de doenças infecciosas e compreender como mudanças no material genético podem fornecer pistas importantes para a ciência.',
        contribution: 'Seu trabalho utiliza métodos computacionais para analisar grandes conjuntos de dados genéticos, identificar padrões e investigar a evolução de organismos causadores de doenças.',
        impact: 'Equipamentos modernos de sequenciamento genético conseguem produzir enormes quantidades de informações. A análise computacional ajuda pesquisadores a transformar esses dados em conhecimento que pode contribuir para investigações científicas e para a saúde pública.',
        connection: 'No desafio, a equipe precisa comparar amostras de um agente infeccioso para investigar se os casos estão relacionados. A combinação entre sequenciamento genético e bioinformática pode revelar semelhanças e diferenças que seriam difíceis de identificar manualmente.',
        encouragement: 'Faça perguntas, observe os dados com cuidado e procure explicações que possam ser verificadas.',
        sources: [
           ['Pardis Sabeti', 'https://www.thecrimson.com/article/2023/3/31/Pardis-Sabeti/']
        ]
      }
    },

    {
      id: 'quimica',
      name: 'Química',
      color: '#B78645',
      tint: '#F8F0E2',
      icon: 'flask-conical',
      description: 'Materiais, moléculas e soluções mais sustentáveis.',

      mission: {
        title: 'A fórmula do futuro',
        context: 'Uma equipe de cientistas quer desenvolver um material capaz de substituir um plástico difícil de reciclar. O novo material precisa ser resistente, seguro, acessível e causar menos impacto ambiental. Testar todas as combinações possíveis no laboratório levaria muito tempo.',
        problem: 'Como a tecnologia pode ajudar a descobrir uma solução química melhor?',
        question: 'Que caminho você escolheria para pesquisar e testar uma alternativa mais sustentável?'
      },

      alternatives: [
        {
          title: 'Simulação molecular',
          description: 'Usar programas para estudar modelos de moléculas e prever algumas de suas propriedades.',
          how: 'Os pesquisadores construiriam modelos digitais e comparariam os resultados antes de selecionar materiais para testes.',
          benefits: 'Pode ajudar a reduzir o número de testes iniciais e a selecionar opções promissoras.',
          limits: 'Uma simulação é um modelo e não garante que o material terá o mesmo comportamento no mundo real.',
          care: 'As previsões devem ser comparadas com experimentos seguros e resultados científicos.',
          reflection: 'Que propriedades você compararia para escolher um material para testes?'
        },
        {
          title: 'Robótica de laboratório',
          description: 'Usar equipamentos automatizados para preparar amostras e realizar testes de forma controlada.',
          how: 'A equipe programaria os equipamentos para executar procedimentos definidos e registrar os resultados.',
          benefits: 'Pode tornar alguns experimentos mais consistentes e facilitar a comparação entre amostras.',
          limits: 'Equipamentos automatizados exigem manutenção, programação adequada e supervisão.',
          care: 'Os experimentos devem seguir protocolos de segurança e ser supervisionados por profissionais capacitados.',
          reflection: 'Como a automação poderia ajudar a comparar diferentes materiais com mais consistência?'
        },
        {
          title: 'Química sustentável',
          description: 'Pesquisar materiais e processos que reduzam o uso de substâncias perigosas, o desperdício e o consumo de recursos.',
          how: 'A equipe compararia matérias-primas, processos de produção e o destino do material depois do uso.',
          benefits: 'Pode ajudar a reduzir certos impactos ambientais durante a produção e o descarte.',
          limits: 'Um material não é automaticamente sustentável só porque tem origem natural ou é chamado de biodegradável.',
          care: 'É importante avaliar o ciclo de vida do material, suas condições de descarte e possíveis efeitos sobre o ambiente.',
          reflection: 'Como você compararia o impacto ambiental de dois materiais diferentes?'
        }
      ],

      woman: {
        name: 'Frances Arnold',
        field: 'Engenharia química e bioengenharia',
        years: '1956 - Presente',
        image: 'frances.jpg',
        bio: 'Frances Arnold é uma engenheira química e pesquisadora norte-americana que recebeu o Prêmio Nobel de Química em 2018 por seu trabalho com a evolução dirigida de enzimas, uma técnica que utiliza princípios da evolução para desenvolver moléculas com características desejadas.',
        contribution: 'Ela ajudou a desenvolver métodos para modificar enzimas e obter propriedades úteis em diferentes processos químicos. Essas técnicas permitem explorar alternativas para produzir substâncias e realizar reações de maneira mais eficiente.',
        impact: 'A evolução dirigida abriu novas possibilidades para a biotecnologia e para o desenvolvimento de processos químicos. Essas pesquisas podem contribuir para reduzir desperdícios e criar formas mais sustentáveis de produzir materiais e substâncias.',
        connection: 'No desafio, os cientistas procuram desenvolver um material com menor impacto ambiental. A pesquisa química pode combinar experimentos, análise de dados e ferramentas computacionais para investigar possibilidades. A simulação ajuda a orientar os testes, mas não substitui a validação experimental.',
        encouragement: 'Compare possibilidades, teste suas ideias com cuidado e use os resultados para melhorar sua proposta.',
        sources: [
          ['Frances Arnold', 'https://www.nobelprize.org/stories/women-who-changed-science/frances-arnold/']
        ]
      }
    },

        {
      id: 'veterinaria',
      name: 'Veterinária',
      color: '#4F9B78',
      tint: '#E7F5EC',
      icon: 'paw-print',
      description: 'Saúde animal, comportamento e bem-estar.',

      mission: {
        title: 'O paciente que não fala',
        context: 'Em uma clínica veterinária fictícia, vários cães e gatos chegam com sintomas difíceis de interpretar. Alguns animais escondem sinais de dor, enquanto outros ficam assustados durante os exames. A equipe precisa investigar o que está acontecendo sem depender apenas de sinais óbvios.',
        problem: 'Como a tecnologia pode ajudar profissionais veterinários a observar sinais, acompanhar a saúde e cuidar melhor dos animais?',
        question: 'Que solução você criaria para ajudar a equipe a compreender as necessidades desse paciente?'
      },

      alternatives: [
        {
          title: 'Exames de imagem',
          description: 'Usar exames de imagem, como radiografias ou ultrassonografia, para investigar possíveis problemas de saúde.',
          how: 'O profissional escolheria o exame adequado e avaliaria as imagens junto com os sinais clínicos do animal.',
          benefits: 'Pode ajudar a observar estruturas internas e apoiar a investigação de problemas de saúde.',
          limits: 'Nem toda condição pode ser identificada por imagem, e alguns exames exigem preparo específico.',
          care: 'Os exames devem ser indicados e interpretados por profissionais veterinários qualificados.',
          reflection: 'Que outras informações o profissional precisaria reunir além das imagens?'
        },
        {
          title: 'Sensores e monitoramento',
          description: 'Usar sensores para acompanhar sinais do animal, como atividade e algumas medidas fisiológicas.',
          how: 'Os dispositivos registrariam informações ao longo do tempo para ajudar a observar mudanças no comportamento ou na condição física.',
          benefits: 'Pode ajudar a perceber mudanças e acompanhar a evolução do animal.',
          limits: 'Os sensores podem apresentar erros e não identificam sozinhos todas as causas de uma mudança.',
          care: 'O dispositivo deve ser confortável, seguro e adequado à espécie e ao tamanho do animal.',
          reflection: 'Como você verificaria se uma mudança registrada pelo sensor merece atenção veterinária?'
        },
        {
          title: 'Análise do comportamento',
          description: 'Observar movimentos, hábitos e mudanças no comportamento para reunir pistas sobre o bem-estar do animal.',
          how: 'A equipe registraria os comportamentos e compararia as observações com o histórico e as condições do animal.',
          benefits: 'Pode ajudar a identificar mudanças que merecem investigação.',
          limits: 'Um comportamento pode ter várias causas e precisa ser interpretado no contexto.',
          care: 'A observação do comportamento deve complementar, e não substituir, uma avaliação veterinária.',
          reflection: 'Quais mudanças no comportamento poderiam indicar que o animal precisa de cuidados?'
        }
      ],

      woman: {
        name: 'Temple Grandin',
        field: 'Ciência animal e bem-estar animal',
        years: '1947 - Presente',
        image: 'temple.jpg',
        bio: 'Temple Grandin é uma cientista norte-americana e professora conhecida por suas pesquisas sobre comportamento e bem-estar de animais, especialmente animais de produção. Ela estudou como o ambiente e a maneira como os animais percebem estímulos podem influenciar suas reações.',
        contribution: 'Grandin desenvolveu projetos de instalações e sistemas de manejo que consideram o comportamento dos animais, buscando reduzir o medo e o estresse durante sua movimentação.',
        impact: 'Seu trabalho contribuiu para ampliar a atenção ao bem-estar animal e demonstrou que compreender o comportamento dos animais pode melhorar as práticas de manejo. A ciência nessa área envolve observar, investigar e adaptar os ambientes às necessidades dos seres vivos.',
        connection: `No desafio da clínica veterinária, observar mudanças de comportamento e utilizar recursos de monitoramento pode fornecer pistas sobre o bem-estar de um animal. Essas informações ajudam o profissional, mas não substituem o exame e o diagnóstico realizados por um médico-veterinário.

        \n\n<b>Observação:</b> Temple Grandin é apresentada por sua contribuição à ciência animal e ao bem-estar, não como médica-veterinária nem como inventora dos equipamentos de diagnóstico citados na missão.`,
        encouragement: 'Observe com cuidado, respeite os sinais dos animais e procure entender o que o comportamento pode indicar.',
        sources: [
           ['Temple Grandin', 'https://globorural.globo.com/Noticias/Criacao/Boi/noticia/2018/08/temple-grandin-americana-que-desenvolveu-o-manejo-racional-do-gado.html']
        ]
      }
    },

    {
      id: 'pedagogia',
      name: 'Pedagogia',
      color: '#8B70BD',
      tint: '#F0EAF9',
      icon: 'book-open',
      description: 'Aprendizagem, inclusão e novas formas de ensinar.',

      mission: {
        title: 'Aprender de um jeito diferente',
        context: 'Em uma escola fictícia, alguns estudantes aprendem melhor com imagens, outros precisam praticar e outros compreendem o conteúdo quando conseguem explicá-lo para alguém. A professora quer ajudar a turma inteira, mas tem pouco tempo para acompanhar individualmente cada aluno.',
        problem: 'Como usar a tecnologia para tornar a aprendizagem mais acessível, interessante e personalizada?',
        question: 'Que solução você criaria para tornar a aprendizagem mais acessível, interessante e colaborativa?'
      },

      alternatives: [
        {
          title: 'Tutor digital',
          description: 'Criar uma ferramenta digital que ofereça explicações e atividades de acordo com as necessidades de aprendizagem de cada estudante.',
          how: 'O estudante resolveria atividades e receberia orientações que o ajudariam a pensar sobre o próximo passo.',
          benefits: 'Pode oferecer prática adicional e permitir que cada estudante avance em seu ritmo.',
          limits: 'Uma ferramenta pode cometer erros e não compreende todas as necessidades de um estudante.',
          care: 'O conteúdo deve ser revisado, proteger os dados dos alunos e complementar o trabalho dos educadores.',
          reflection: 'Como você faria o tutor ajudar o estudante a pensar sem simplesmente entregar a resposta?'
        },
        {
          title: 'Jogos e simulações educativas',
          description: 'Transformar conteúdos em jogos ou simulações para que os estudantes possam explorar ideias e aprender com suas tentativas.',
          how: 'A atividade apresentaria desafios, permitiria testar escolhas e ofereceria retorno sobre o que aconteceu.',
          benefits: 'Pode tornar certos conceitos mais concretos e incentivar a participação.',
          limits: 'Um jogo divertido não garante, por si só, que o conteúdo foi aprendido.',
          care: 'As atividades devem ser acessíveis e ter objetivos de aprendizagem claros.',
          reflection: 'Como você verificaria se os estudantes aprenderam o conteúdo durante o jogo?'
        },
        {
          title: 'Projetos colaborativos com tecnologia',
          description: 'Usar ferramentas digitais para que estudantes trabalhem juntos em projetos, compartilhem ideias e criem soluções.',
          how: 'A turma definiria um objetivo, dividiria tarefas e usaria ferramentas adequadas para registrar e apresentar o trabalho.',
          benefits: 'Pode desenvolver colaboração, comunicação e resolução de problemas.',
          limits: 'Alguns estudantes podem ter menos acesso à tecnologia ou participar menos do trabalho em grupo.',
          care: 'As tarefas devem ser distribuídas de forma justa e oferecer alternativas para diferentes necessidades.',
          reflection: 'Como você garantiria que todos os integrantes contribuíssem para o projeto?'
        }
      ],

      woman: {
        name: 'Reshma Saujani',
        field: 'Educação, inclusão e tecnologia',
        years: '1975 - Presente',
        image: 'reshma.jpg',
        bio: 'Reshma Saujani é uma advogada, autora e empreendedora social norte-americana, fundadora da organização Girls Who Code, criada para ampliar a participação de meninas e mulheres na computação.Reshma Saujani é uma ativista e empreendedora conhecida por fundar a organização Girls Who Code.',
        contribution: 'Por meio da Girls Who Code, ajudou a ampliar oportunidades de aprendizagem em programação e a aproximar meninas da criação de tecnologias, como sites, jogos e aplicativos.',
        impact: 'A educação tecnológica pode ajudar estudantes a desenvolver raciocínio lógico, criatividade e capacidade de resolver problemas. Iniciativas inclusivas também mostram que meninas podem participar não apenas do uso, mas da criação de novas tecnologias.',
        connection: `No desafio da escola, os estudantes podem aprender por meio de projetos interativos, jogos e programação. A trajetória de Reshma Saujani reforça a importância de oferecer oportunidades para que todos possam explorar a tecnologia e criar suas próprias soluções.
         \n\n<b>Observação:</b> Reshma Saujani é uma referência em inclusão e educação para a tecnologia. Sua contribuição está ligada à ampliação do acesso à programação, não à invenção de sistemas de aprendizagem personalizados.`,
        encouragement: 'Pense em como sua ideia pode ajudar pessoas com diferentes experiências e necessidades a aprender.',
        sources: [
           ['Reshma Saujani', 'https://en.wikipedia.org/wiki/Reshma_Saujani']
        ]
      }
    },

    {
      id: 'administracao',
      name: 'Administração',
      color: '#4F82A8',
      tint: '#E8F1F8',
      icon: 'chart-no-axes-combined',
      description: 'Planejamento, gestão e decisões baseadas em dados.',

      mission: {
        title: 'A empresa do futuro',
        context: 'Uma empresa fictícia está crescendo rapidamente, mas enfrenta problemas: alguns produtos acabam no estoque, outros ficam parados, os clientes esperam muito por atendimento e as decisões são tomadas com informações desatualizadas.',
        problem: 'Como usar dados e tecnologia para administrar melhor a empresa?',
        question: 'Que solução você criaria para ajudar a empresa a organizar seus dados e planejar o futuro?'
      },

      alternatives: [
        {
          title: 'Painel de dados em tempo real',
          description: 'Criar um painel que reúna informações importantes sobre vendas, estoque e funcionamento da empresa.',
          how: 'O sistema organizaria os dados em gráficos e indicadores que ajudariam a equipe a acompanhar os resultados.',
          benefits: 'Pode facilitar a identificação de mudanças e apoiar decisões mais rápidas.',
          limits: 'Um painel não resolve problemas sozinho e pode induzir a erros se os dados estiverem incorretos.',
          care: 'Os indicadores devem ser claros, relevantes e atualizados com dados confiáveis.',
          reflection: 'Quais informações seriam mais úteis para acompanhar a saúde de uma empresa?'
        },
        {
          title: 'Previsão de demanda com inteligência artificial',
          description: 'Usar modelos computacionais para estimar a procura futura por produtos ou serviços.',
          how: 'A equipe analisaria dados históricos e outras informações relevantes para gerar estimativas que seriam revisadas por pessoas responsáveis.',
          benefits: 'Pode ajudar a planejar estoques, compras e recursos.',
          limits: 'Mudanças inesperadas podem tornar as previsões menos precisas.',
          care: 'As previsões devem ser tratadas como estimativas, não como certezas.',
          reflection: 'Que acontecimentos poderiam fazer uma previsão de vendas deixar de funcionar?'
        },
        {
          title: 'Automação de tarefas',
          description: 'Automatizar tarefas repetitivas para que a equipe possa dedicar mais tempo a atividades que exigem análise e comunicação.',
          how: 'A equipe identificaria tarefas adequadas, definiria regras e testaria a automação antes de ampliar seu uso.',
          benefits: 'Pode reduzir tarefas manuais e tornar alguns processos mais consistentes.',
          limits: 'Uma automação mal planejada pode repetir erros ou criar novas dificuldades.',
          care: 'É necessário acompanhar os resultados, proteger os dados e manter formas de intervenção humana.',
          reflection: 'Qual tarefa você automatizaria primeiro e como verificaria se a mudança ajudou?'
        }
      ],

      woman: {
        name: 'Cristina Junqueira',
        field: 'Administração, empreendedorismo e serviços financeiros',
        years: '1982 - Presente',
        image: 'Cristina_Junqueira.jpg',
        bio: 'Cristina Junqueira é uma empresária brasileira e cofundadora do Nubank. Sua trajetória está relacionada ao desenvolvimento de um negócio que utiliza tecnologia para oferecer serviços financeiros digitais.',
        contribution: 'Como cofundadora, participou da construção e expansão de uma empresa que colocou a experiência digital do cliente no centro de seu modelo de negócio, utilizando plataformas tecnológicas para oferecer serviços financeiros.',
        impact: 'A transformação digital pode mudar como uma empresa organiza seus processos, atende clientes e desenvolve produtos. A administração passa a combinar estratégia, análise de dados, inovação e compreensão das necessidades do público.',
        connection: 'No desafio da empresa fictícia, os gestores precisam reunir dados de vendas, estoque e atendimento para tomar decisões melhores. A trajetória de Cristina Junqueira ilustra como a tecnologia pode fazer parte da estratégia de uma organização e transformar a maneira como ela oferece seus serviços.',
        encouragement: 'Identifique um problema de organização, pense em opções e compare os possíveis resultados antes de escolher.',
        sources: [
           ['Cristina Junqueira', 'https://en.wikipedia.org/wiki/Cristina_Junqueira']
        ]
      }
    },

        {
      id: 'ciencias-contabeis',
      name: 'Ciências Contábeis',
      color: '#547D91',
      tint: '#E8F1F5',
      icon: 'calculator',
      description: 'Finanças, auditoria e análise de informações contábeis.',

      mission: {
        title: 'O dinheiro que não fecha',
        context: 'Uma organização fictícia percebeu que os valores registrados em seu sistema financeiro não correspondem ao dinheiro disponível em suas contas. Há centenas de transações, notas fiscais e pagamentos para verificar, e a equipe precisa descobrir a origem das diferenças antes de fechar o mês.',
        problem: 'Como usar a tecnologia para encontrar erros e tornar os registros financeiros mais confiáveis?',
        question: 'Que solução você criaria para ajudar a equipe a entender por que os valores não correspondem?'
      },

      alternatives: [
        {
          title: 'Conciliação bancária automatizada',
          description: 'Criar um sistema que compare os registros financeiros da empresa com os dados dos extratos bancários.',
          how: 'O sistema compararia valores, datas e descrições para destacar registros correspondentes e possíveis diferenças.',
          benefits: 'Pode reduzir tarefas manuais e ajudar a localizar divergências com mais rapidez.',
          limits: 'Descrições diferentes, dados incompletos ou lançamentos atrasados podem dificultar a comparação.',
          care: 'Os resultados devem ser revisados por uma pessoa responsável antes de corrigir os registros.',
          reflection: 'Que informações ajudariam o sistema a comparar corretamente dois lançamentos?'
        },
        {
          title: 'Detecção de anomalias com inteligência artificial',
          description: 'Usar ferramentas de análise para identificar movimentações que pareçam diferentes dos padrões habituais.',
          how: 'O sistema analisaria os registros e destacaria operações que merecem uma verificação adicional.',
          benefits: 'Pode ajudar a encontrar erros ou movimentações incomuns que poderiam passar despercebidos.',
          limits: 'Uma movimentação diferente não significa necessariamente que houve fraude ou erro.',
          care: 'Os alertas precisam ser investigados com cuidado, protegendo informações financeiras e pessoais.',
          reflection: 'Por que uma movimentação incomum deve ser investigada antes de ser considerada um erro?'
        },
        {
          title: 'Rastreabilidade digital',
          description: 'Organizar os registros para que cada movimentação possa ser acompanhada desde sua origem até o lançamento final.',
          how: 'O sistema manteria registros organizados de datas, valores, documentos e alterações realizadas.',
          benefits: 'Pode facilitar auditorias e ajudar a compreender como os valores foram registrados.',
          limits: 'Registros digitais não garantem que todas as informações estejam corretas desde o início.',
          care: 'O acesso deve ser controlado, e os registros precisam ser protegidos contra alterações indevidas.',
          reflection: 'Que informações você guardaria para conseguir verificar uma movimentação depois?'
        }
      ],

      woman: {
        name: 'Mary T. Washington Wylie',
        field: 'Contabilidade',
        years: '1906 - 2005',
        image: 'MaryTWashingtonWylie.jpg',
        bio: 'Mary T. Washington Wylie foi uma contadora norte-americana pioneira. Em 1943, tornou-se a primeira mulher negra nos Estados Unidos a obter a certificação de Certified Public Accountant (CPA), uma qualificação profissional da área contábil.',
        contribution: 'Ela construiu sua carreira na contabilidade e fundou uma empresa própria, abrindo caminhos em uma profissão na qual mulheres negras enfrentavam barreiras de acesso e reconhecimento.',
        impact: `A contabilidade é essencial para compreender a situação financeira de organizações, conferir registros e apoiar decisões. A evolução de ferramentas digitais tornou possível automatizar tarefas, comparar grandes volumes de transações e identificar inconsistências com mais rapidez.
       \n\n<b>Observação:</b> Mary T. Washington Wylie é apresentada como pioneira da profissão contábil. As ferramentas digitais citadas na missão são exemplos de tecnologias atuais, não invenções atribuídas a ela.`,
        connection: 'No desafio financeiro, a equipe precisa descobrir por que os registros não correspondem aos valores disponíveis. Ferramentas de conciliação e análise de dados podem ajudar a localizar divergências, enquanto a revisão profissional continua sendo fundamental para interpretar os resultados.',
        encouragement: 'Organize as informações, confira os registros e procure explicar cada diferença com base em evidências.',
        sources: [
           ['Mary T. Washington Wylie', 'https://en.wikipedia.org/wiki/Mary_T._Washington_Wylie']
        ]
      }
    },

    {
      id: 'tecnologia',
      name: 'Tecnologia',
      color: '#5969B1',
      tint: '#EAEDFA',
      icon: 'laptop',
      description: 'Programação, algoritmos e criação de soluções digitais.',

      mission: {
        title: 'E se uma máquina pudesse seguir suas ideias?',
        context: 'Imagine uma máquina capaz de executar tarefas seguindo instruções. Uma equipe quer ensinar esse dispositivo a resolver um desafio, mas ele só consegue realizar aquilo que foi descrito em uma sequência organizada de comandos.',
        problem: 'Como transformar uma ideia em instruções que uma máquina consiga executar?',
        question: 'Que programa você criaria e quais instruções ele precisaria seguir?'
      },

      alternatives: [
        {
          title: 'Criar um algoritmo',
          description: 'Planejar uma sequência clara de instruções para que o computador realize uma tarefa.',
          how: 'A equipe dividiria o problema em etapas, definiria as entradas e saídas e escreveria as instruções.',
          benefits: 'Pode tornar o processo mais organizado e facilitar a identificação de erros.',
          limits: 'Um algoritmo só funciona como esperado se as instruções e os dados forem adequados.',
          care: 'É importante testar diferentes situações e considerar possíveis erros antes de usar o programa.',
          reflection: 'Como você dividiria uma tarefa grande em instruções menores?'
        },
        {
          title: 'Reconhecimento de padrões',
          description: 'Criar um sistema que analise dados e identifique padrões que possam ajudar em uma tarefa.',
          how: 'O sistema analisaria exemplos e procuraria regularidades nos dados para produzir uma classificação ou previsão.',
          benefits: 'Pode ajudar a organizar informações e realizar algumas tarefas com rapidez.',
          limits: 'O sistema pode errar, especialmente quando recebe dados diferentes daqueles usados em seu desenvolvimento.',
          care: 'Os resultados precisam ser testados, e os dados devem ser usados de forma responsável.',
          reflection: 'Como você descobriria se o sistema reconhece padrões corretamente ou está cometendo erros?'
        },
        {
          title: 'Programa interativo',
          description: 'Desenvolver um programa que permita ao usuário inserir informações, fazer escolhas e observar resultados.',
          how: 'A equipe criaria uma interface, definiria como o programa responderia às ações e testaria seu funcionamento.',
          benefits: 'Pode ajudar as pessoas a realizar tarefas de forma prática e participativa.',
          limits: 'Uma interface confusa ou pouco acessível pode dificultar o uso.',
          care: 'O programa deve proteger os dados dos usuários e oferecer instruções claras.',
          reflection: 'Como você faria para que pessoas com diferentes experiências conseguissem usar seu programa?'
        }
      ],

      woman: {
        name: 'Ada Lovelace',
        field: 'Matemática e história da computação',
        years: '1815–1852',
        image: 'Ada_Lovelace_.jpg',
        bio: 'Ada Lovelace foi uma matemática inglesa que colaborou intelectualmente com as ideias sobre a Máquina Analítica, um projeto de máquina mecânica de cálculo desenvolvido por Charles Babbage. Suas anotações demonstraram uma compreensão pioneira de como uma máquina programável poderia executar operações seguindo instruções organizadas.',
        contribution: 'Em suas notas sobre a Máquina Analítica, publicadas em 1843, Ada descreveu um método para calcular números de Bernoulli. Por isso, seu trabalho é frequentemente considerado um marco na história da programação de computadores.',
        impact: 'Ada percebeu que uma máquina programável poderia, em princípio, manipular símbolos de acordo com regras, indo além da realização de cálculos numéricos. Essa visão ajuda a compreender uma ideia fundamental da computação: máquinas podem executar tarefas complexas quando recebem instruções bem definidas.',
        connection: 'No desafio, os visitantes precisam transformar uma ideia em uma sequência de instruções que uma máquina consiga executar. Esse é o princípio dos algoritmos e da programação, áreas que hoje permitem desenvolver aplicativos, jogos, sistemas de inteligência artificial e muitas outras tecnologias.',
        encouragement: 'Transforme sua ideia em etapas claras e teste cada uma para descobrir como melhorar seu programa.',
        sources: [
           ['Ada Lovelace', 'https://en.wikipedia.org/wiki/Ada_Lovelace']
        ]
      }
    },

    {
      id: 'moda',
      name: 'Moda',
      color: '#B66E91',
      tint: '#F8EAF1',
      icon: 'handbag',
      description: 'Design, roupas digitais e experiências de compra.',

      mission: {
        title: 'Vista antes de comprar',
        context: 'Uma loja de roupas fictícia vende milhares de peças pela internet, mas muitos clientes ficam em dúvida sobre como elas ficariam em seus próprios corpos. Alguns desistem da compra por não conseguirem imaginar o resultado; outros compram e devolvem as peças porque a aparência é diferente do que esperavam.\n\n'+
        'A loja quer criar uma experiência em que cada pessoa possa enviar uma foto, escolher uma roupa e visualizar uma versão de si mesma usando aquela peça.',
        problem: 'Como a tecnologia pode transformar a maneira de experimentar e comprar roupas pela internet?',
        question: 'Que solução você criaria para ajudar as pessoas a experimentar estilos de forma digital?'
      },

      alternatives: [
        {
          title: 'Provador virtual com inteligência artificial',
          description: 'Criar uma ferramenta que mostre uma representação de como uma roupa poderia ficar em uma pessoa.',
          how: 'O usuário escolheria uma imagem ou um avatar e selecionaria roupas para visualizar uma simulação.',
          benefits: 'Pode ajudar a explorar estilos e comparar opções sem experimentar fisicamente cada peça.',
          limits: 'A imagem simulada pode não representar com precisão o caimento, o tecido ou o tamanho real da roupa.',
          care: 'As imagens e os dados pessoais devem ser protegidos, e o sistema precisa explicar suas limitações.',
          reflection: 'Que informações você mostraria para que o usuário não confundisse a simulação com uma prova real da roupa?'
        },
        {
          title: 'Avatar personalizado',
          description: 'Permitir que o usuário crie uma representação digital com características escolhidas para experimentar combinações de roupas.',
          how: 'O usuário ajustaria as características do avatar e selecionaria peças para comparar diferentes visuais.',
          benefits: 'Pode facilitar a exploração de combinações e ajudar na expressão pessoal.',
          limits: 'Um avatar não representa perfeitamente todos os corpos, movimentos ou características dos tecidos.',
          care: 'A ferramenta deve respeitar diferentes corpos, estilos e identidades, sem impor padrões de aparência.',
          reflection: 'Como você criaria avatares que representassem melhor a diversidade das pessoas?'
        },
        {
          title: 'Recomendações de estilo',
          description: 'Desenvolver um sistema que sugira roupas e combinações com base nas preferências informadas pelo usuário.',
          how: 'O usuário indicaria estilos ou peças de interesse, e o sistema apresentaria sugestões que poderiam ser ajustadas.',
          benefits: 'Pode ajudar a descobrir novas combinações e encontrar peças de interesse.',
          limits: 'As sugestões podem ser limitadas ou não corresponder ao gosto da pessoa.',
          care: 'O usuário deve poder controlar suas preferências e evitar recomendações indesejadas.',
          reflection: 'Como você faria para que as sugestões ajudassem o usuário sem limitar suas escolhas?'
        }
      ],

      woman: {
        name: 'Daria Shapovalova e Natalia Modenova',
        field: 'Moda digital e empreendedorismo',
        years: '',
        image: 'Daria_Natalia.jpg',
        bio: 'Daria Shapovalova e Natalia Modenova são empreendedoras ucranianas e cofundadoras da DRESSX, uma empresa de moda digital criada em 2020. A iniciativa combina moda e tecnologia para permitir que as pessoas experimentem visualmente roupas digitais e explorem novas possibilidades de expressão.',
        contribution: 'A DRESSX ajudou a popularizar a moda digital e desenvolveu soluções para visualizar roupas em fotografias. Esse tipo de tecnologia permite experimentar diferentes estilos virtualmente, sem precisar vestir fisicamente cada peça.',
        impact: 'A inteligência artificial está transformando a maneira como as pessoas escolhem e compram roupas. A experimentação virtual pode ajudar consumidores a explorar estilos e lojas a apresentar produtos de novas formas. A moda digital também levanta questões sobre consumo, privacidade e representação realista das roupas.',
        connection: 'No desafio apresentado, uma pessoa quer descobrir como determinada roupa ficaria nela antes de comprá-la. A experimentação virtual com inteligência artificial pode combinar uma fotografia da pessoa com a imagem de uma peça e gerar uma prévia do resultado. Essa imagem ajuda a visualizar o estilo, mas não garante o caimento, o tamanho ou o conforto reais da roupa.',
        encouragement: 'Pense em como a tecnologia pode ampliar a criatividade e, ao mesmo tempo, respeitar a diversidade e as escolhas de cada pessoa.',
        sources: [
           ['Daria Shapovalova e Natalia Modenova', 'https://www.revistalofficiel.com.br/moda/moda-digital-possibilidades-espaco-virtual']
        ]
      }
    },

        {
      id: 'ecologia',
      name: 'Ecologia',
      color: '#438B68',
      tint: '#E5F3E9',
      icon: 'leaf',
      description: 'Energia limpa, sustentabilidade e proteção ambiental.',

      mission: {
        title: 'O Sol depois do pôr do sol',
        context: 'Em uma região fictícia, milhares de casas dependem de eletricidade, mas a demanda continua alta durante a noite, quando os painéis solares já não recebem luz. A região também enfrenta períodos nublados e precisa reduzir a dependência de fontes poluentes.\n\n'+
        'Uma equipe de engenheiros precisa criar uma solução para aproveitar a energia solar de maneira mais eficiente e disponibilizá-la quando as pessoas mais precisam.',
        problem: 'Como transformar a luz do Sol em energia que continue disponível depois que ele desaparecer?',
        question: 'Que solução você criaria para aproveitar melhor a energia solar durante o dia e à noite?'
      },

      alternatives: [
        {
          title: 'Espelhos e armazenamento térmico',
          description: 'Usar espelhos para concentrar a luz solar e aquecer um material que possa guardar calor para uso posterior.',
          how: 'A luz concentrada aqueceria um material, e o calor armazenado poderia ser usado mais tarde para ajudar a produzir energia.',
          benefits: 'Pode permitir o uso de parte do calor solar depois que a luz direta diminui.',
          limits: 'O sistema depende das condições de luz, exige equipamentos específicos e pode ter perdas de energia.',
          care: 'O projeto precisa considerar a segurança, o uso da água e os impactos ambientais dos materiais.',
          reflection: 'Como o calor armazenado durante o dia poderia ser aproveitado à noite?'
        },
        {
          title: 'Painéis solares e baterias',
          description: 'Combinar painéis solares com baterias para guardar parte da eletricidade produzida durante o dia.',
          how: 'Os painéis gerariam eletricidade, e o sistema armazenaria parte dela para uso posterior.',
          benefits: 'Pode ajudar a fornecer energia quando a produção solar diminui.',
          limits: 'As baterias têm custos, vida útil limitada e impactos ligados à produção e ao descarte.',
          care: 'É necessário dimensionar o sistema, instalar os equipamentos com segurança e planejar o descarte adequado.',
          reflection: 'Que informações você precisaria para estimar quanta energia guardar para a noite?'
        },
        {
          title: 'Rede elétrica inteligente',
          description: 'Usar sistemas digitais para acompanhar a produção e o consumo de energia e coordenar diferentes fontes de eletricidade.',
          how: 'Sensores e programas reuniriam dados sobre a rede para ajudar a equilibrar a oferta e a procura de energia.',
          benefits: 'Pode ajudar a integrar fontes renováveis e melhorar o planejamento do consumo.',
          limits: 'O sistema depende de infraestrutura, dados confiáveis e proteção contra falhas digitais.',
          care: 'A rede precisa proteger informações, manter a segurança dos equipamentos e prever alternativas em caso de falha.',
          reflection: 'Como uma rede inteligente poderia ajudar a distribuir energia quando a produção solar diminui?'
        }
      ],


woman: {
  name: 'Wangari Maathai',
  field: 'Ecologia, conservação ambiental e desenvolvimento sustentável',
  years: '1940–2011',
  image: 'WangariMaathai.jpg',
  bio: 'Wangari Maathai foi uma bióloga, professora e ativista ambiental queniana. Ela fundou o Movimento Cinturão Verde, iniciativa que mobilizou comunidades, especialmente mulheres, para plantar árvores e cuidar do ambiente.',
  contribution: 'Por meio do Movimento Cinturão Verde, promoveu o plantio de árvores, a recuperação de áreas degradadas e a participação comunitária na proteção ambiental. Seu trabalho também relacionou a conservação da natureza às necessidades das comunidades locais.',
  impact: 'Sua atuação ajudou a destacar a ligação entre meio ambiente, qualidade de vida e participação cidadã. Em 2004, recebeu o Prêmio Nobel da Paz por sua contribuição ao desenvolvimento sustentável, à democracia e à paz.',
  connection: 'Na missão sobre energia solar, é importante considerar não apenas como produzir e armazenar energia, mas também os impactos ambientais e sociais das soluções escolhidas. A trajetória de Wangari Maathai mostra como a sustentabilidade depende de decisões que considerem os ecossistemas e as comunidades.',
  encouragement: 'Pequenas ações podem contribuir para grandes mudanças quando são planejadas e realizadas em conjunto.',
  sources: [
    ['Nobel Prize — Wangari Maathai', 'https://www.nobelprize.org/prizes/peace/2004/maathai/facts/'],
    ['The Green Belt Movement', 'https://www.greenbeltmovement.org/']
  ]
}

    },

    {
      id: 'direito',
      name: 'Direito',
      color: '#64718A',
      tint: '#EBEEF4',
      icon: 'scale',
      description: 'Direitos, privacidade e responsabilidade no mundo digital.',

      mission: {
        title: 'Quem está usando seus dados?',
        context: 'Uma rede social fictícia lançou uma ferramenta de inteligência artificial que cria avatares personalizados a partir das fotos dos usuários. A novidade fez sucesso, mas algumas pessoas descobriram que suas imagens e informações estavam sendo utilizadas para treinar sistemas de IA sem uma explicação clara sobre como isso acontecia.\n\n'+
        'A empresa afirma que a tecnologia melhora a experiência dos usuários. Já parte da comunidade questiona se as pessoas realmente entenderam e autorizaram o uso de seus dados.',
        problem: 'Como as pessoas podem entender, controlar e proteger seus dados pessoais no ambiente digital?',
        question: 'Que solução você criaria para tornar o uso de dados mais transparente e responsável?'
      },

      alternatives: [
        {
          title: 'Transparência e consentimento',
          description: 'Criar uma interface que explique quais dados são coletados, por que são usados e quais escolhas a pessoa pode fazer.',
          how: 'O sistema apresentaria explicações claras e pediria autorização quando necessário, respeitando as regras aplicáveis.',
          benefits: 'Pode ajudar as pessoas a compreender melhor o uso de suas informações.',
          limits: 'Uma explicação clara não garante, sozinha, que todos os usos dos dados sejam adequados.',
          care: 'As informações devem ser honestas, acessíveis e apresentadas sem pressionar a pessoa a aceitar.',
          reflection: 'Como você explicaria o uso de dados para alguém que nunca estudou esse assunto?'
        },
        {
          title: 'Proteção e controle de dados',
          description: 'Criar ferramentas que permitam consultar, corrigir ou solicitar a exclusão de dados pessoais quando isso for aplicável.',
          how: 'A pessoa acessaria uma área de controle para conhecer as informações guardadas e exercer seus direitos.',
          benefits: 'Pode facilitar o acompanhamento dos dados e o exercício dos direitos das pessoas.',
          limits: 'Nem todos os dados podem ser apagados em qualquer situação, pois podem existir obrigações legais ou outras bases legítimas para mantê-los.',
          care: 'O sistema deve proteger o acesso e explicar de forma clara os direitos e os limites aplicáveis.',
          reflection: 'Que controles ajudariam uma pessoa a entender quais informações uma empresa guarda sobre ela?'
        },
        {
          title: 'Investigação e responsabilização',
          description: 'Organizar registros e procedimentos para investigar possíveis usos indevidos de dados e identificar responsabilidades.',
          how: 'A equipe reuniria registros relevantes, verificaria os fatos e seguiria os procedimentos legais adequados.',
          benefits: 'Pode ajudar a esclarecer incidentes e apoiar medidas para evitar que voltem a acontecer.',
          limits: 'Um registro ou alerta, sozinho, não prova que uma pessoa cometeu uma infração.',
          care: 'A investigação deve respeitar a privacidade, a segurança das informações e o direito de defesa.',
          reflection: 'Que evidências seriam necessárias antes de concluir que houve uso indevido de dados?'
        }
      ],

      woman: {
        name: 'Patricia Peck Pinheiro',
        field: 'Direito digital e proteção de dados',
        years: '',
        image: 'Patricia-Peck-5.jpg',
        bio: 'Patricia Peck Pinheiro é advogada e pesquisadora brasileira especializada em direito digital, privacidade, proteção de dados e segurança da informação.',
        contribution: 'Por meio de sua atuação profissional, pesquisa e produção de conhecimento, contribui para orientar empresas e instituições sobre as responsabilidades jurídicas relacionadas ao uso da tecnologia e ao tratamento de dados pessoais.',
        impact: 'Seu trabalho ajuda a aproximar o Direito das transformações digitais, mostrando que inovação, segurança e respeito aos direitos das pessoas precisam caminhar juntos.',
        connection: 'O caso mostra que criar uma tecnologia inovadora não é suficiente: também é necessário avaliar como ela utiliza informações pessoais e quais direitos precisam ser protegidos. A atuação de Patricia Peck Pinheiro está relacionada a esse desafio de compreender e aplicar o Direito em um mundo cada vez mais digital.',
        encouragement: 'Antes de propor uma solução digital, pense nos direitos das pessoas e em como explicar suas escolhas com clareza.',
      sources: [
           ['Patricia Peck Pinheiro', 'https://peckadv.com.br/profissional/patricia-peck/']
        ]
      }
    },

    {
      id: 'psicologia',
      name: 'Psicologia',
      color: '#9A75AD',
      tint: '#F3EAF7',
      icon: 'brain',
      description: 'Bem-estar emocional, escuta e apoio psicológico.',

      mission: {
        title: 'Uma pausa para a mente',
        context: 'Uma escola fictícia percebe que muitos estudantes estão enfrentando estresse, ansiedade e dificuldades para lidar com a pressão das provas e dos trabalhos. Alguns não sabem identificar o que estão sentindo; outros têm dificuldade para encontrar informações confiáveis ou buscar ajuda.\n\n'+
        'A escola quer desenvolver uma experiência tecnológica que ajude os estudantes a compreender melhor suas emoções, conhecer estratégias de autocuidado e encontrar apoio quando necessário.',
        problem: 'A escola quer desenvolver uma experiência tecnológica que ajude os estudantes a compreender melhor suas emoções, conhecer estratégias de autocuidado e encontrar apoio quando necessário.',
        question: 'Que solução você criaria para ajudar as pessoas a cuidar do bem-estar emocional e encontrar apoio adequado?'
      },

      alternatives: [
        {
          title: 'Aplicativo de bem-estar emocional',
          description: 'Criar um aplicativo com atividades de reflexão, exercícios de relaxamento e recursos para acompanhar hábitos de bem-estar.',
          how: 'A pessoa escolheria atividades adequadas às suas necessidades e poderia registrar como está se sentindo.',
          benefits: 'Pode facilitar o acesso a atividades de autocuidado e ajudar a observar mudanças ao longo do tempo.',
          limits: 'Um aplicativo não diagnostica nem trata, por si só, problemas de saúde mental.',
          care: 'O aplicativo deve proteger informações sensíveis e deixar claro quando é importante procurar ajuda profissional.',
          reflection: 'Como você criaria uma ferramenta acolhedora sem prometer resolver todos os problemas emocionais?'
        },
        {
          title: 'Assistente virtual de apoio',
          description: 'Criar um assistente digital que ofereça informações gerais, ajude a organizar pensamentos e indique recursos de apoio.',
          how: 'O usuário conversaria com o sistema, que responderia dentro de limites definidos e indicaria ajuda humana quando necessário.',
          benefits: 'Pode facilitar o acesso a informações e ajudar a pessoa a encontrar recursos de apoio.',
          limits: 'O sistema pode interpretar mal uma situação e não substitui um psicólogo ou outro profissional qualificado.',
          care: 'É essencial proteger a privacidade, reconhecer situações de risco e orientar a busca por ajuda humana quando necessário.',
          reflection: 'Como o assistente deveria agir se percebesse que alguém precisa de ajuda profissional?'
        },
        {
          title: 'Plataforma de apoio psicológico',
          description: 'Criar uma plataforma que ajude as pessoas a encontrar informações sobre atendimento e serviços de apoio psicológico.',
          how: 'A plataforma organizaria informações sobre serviços disponíveis, formas de contato e recursos para buscar atendimento.',
          benefits: 'Pode facilitar a busca por profissionais e ajudar as pessoas a compreender as opções de apoio.',
          limits: 'A disponibilidade de atendimento pode variar conforme a região, o custo e as necessidades de cada pessoa.',
          care: 'As informações devem ser confiáveis, a privacidade deve ser protegida e o atendimento deve ser realizado por profissionais qualificados.',
          reflection: 'Que informações ajudariam uma pessoa a escolher um serviço de apoio adequado?'
        }
      ],

      woman: {
        name: 'Alison Darcy',
        field: 'Psicologia e tecnologia para saúde mental',
        years: '',
        image: 'Alison_Darcy.jpg',
        bio: 'Alison Darcy é uma psicóloga e pesquisadora que trabalha na interseção entre saúde mental e tecnologia. Ela fundou a Woebot Health, empresa que desenvolveu ferramentas digitais de apoio emocional inspiradas em princípios da psicologia e em técnicas da terapia cognitivo-comportamental.',
        contribution: 'Alison Darcy ajudou a desenvolver soluções digitais que utilizam conhecimentos da psicologia para oferecer recursos de apoio à saúde mental. Entre essas iniciativas está o Woebot, um agente conversacional criado para interagir com usuários e apresentar estratégias relacionadas ao bem-estar emocional.',
        impact: 'A tecnologia pode ampliar o acesso a informações e recursos de apoio psicológico, ajudando as pessoas a reconhecer emoções e aprender estratégias para enfrentar dificuldades. Entretanto, ferramentas digitais não substituem automaticamente o acompanhamento de um psicólogo e precisam ser utilizadas com responsabilidade, especialmente quando envolvem informações pessoais e sensíveis.',
        connection: 'No desafio apresentado, os estudantes precisam encontrar maneiras de compreender e cuidar melhor da própria saúde mental. Ferramentas digitais inspiradas em princípios psicológicos podem oferecer informações, exercícios e orientações de autocuidado. Assim como Alison Darcy, é possível unir Psicologia e Tecnologia para desenvolver soluções que apoiem o bem-estar emocional, respeitando os limites dessas ferramentas e a importância da ajuda profissional.',
        encouragement: 'Pense em soluções acolhedoras, respeite a privacidade e reconheça quando o apoio de uma pessoa qualificada é necessário.',
        sources: [
           ['Alison Darcy', 'https://en.wikipedia.org/wiki/Alison_Darcy']
        ]
      }
    },

    
{
  id: 'alimentacao',
  name: 'Nutrição',
  color: '#b34b70',
  tint: '#fcecf2',
  icon: 'apple',
  description: 'Usar ciência e tecnologia para uma alimentação mais saudável.',

  mission: {
    title: 'Sua alimentação, do seu jeito',
    context: 'Uma pessoa quer melhorar sua alimentação, mas não sabe quais refeições combinam com sua rotina nem se precisa tomar suplementos. Ela gostaria de uma solução que considerasse seus objetivos, preferências e hábitos para receber orientações mais personalizadas.',
    problem: 'A pessoa precisa de orientações alimentares adequadas à sua rotina, mas não sabe como avaliar suas necessidades nutricionais nem quando procurar um profissional.',
    question: 'Como a inteligência artificial pode ajudar a personalizar a alimentação e orientar sobre a necessidade de suplementação?'
  },

  alternatives: [
    {
      title: 'Plano alimentar personalizado com IA',
      description: 'Analisar a rotina, os objetivos e as preferências da pessoa para sugerir refeições equilibradas e adaptadas ao seu dia a dia.',
      how: 'A ferramenta analisaria informações sobre a rotina, os objetivos e as preferências da pessoa para sugerir opções de refeições adaptadas ao seu dia a dia.',
      benefits: 'Pode facilitar o planejamento das refeições e ajudar a encontrar opções compatíveis com a rotina e as preferências individuais.',
      limits: 'As sugestões podem não atender a todas as necessidades nutricionais e não substituem a avaliação de um profissional de Nutrição.',
      care: 'Proteger os dados pessoais e evitar recomendações alimentares inadequadas ou restritivas.',
      reflection: 'Como garantir que as sugestões sejam adequadas às necessidades de cada pessoa?'
    },
    {
      title: 'Análise nutricional inteligente',
      description: 'Identificar possíveis lacunas nos hábitos alimentares e indicar quando uma avaliação profissional pode ser necessária para verificar a necessidade de suplementação.',
      how: 'A ferramenta analisaria informações sobre os hábitos alimentares e apontaria situações em que uma avaliação profissional poderia ser importante.',
      benefits: 'Pode ajudar a identificar pontos de atenção nos hábitos alimentares e incentivar a busca por orientação especializada.',
      limits: 'Os hábitos alimentares, por si só, não confirmam deficiências nutricionais nem determinam a necessidade de suplementos.',
      care: 'Não indicar suplementos por conta própria. A necessidade de suplementação deve ser avaliada por um profissional habilitado.',
      reflection: 'Como a tecnologia pode ajudar sem substituir uma avaliação profissional?'
    },
    {
      title: 'Assistente nutricional virtual',
      description: 'Ajudar a organizar refeições, sugerir substituições de alimentos e acompanhar hábitos alimentares para facilitar uma rotina mais saudável.',
      how: 'Um assistente virtual ofereceria ideias de refeições, sugeriria substituições de alimentos e ajudaria a registrar hábitos alimentares.',
      benefits: 'Pode tornar o planejamento das refeições mais prático e ajudar a acompanhar os hábitos ao longo do tempo.',
      limits: 'As sugestões precisam considerar alergias, restrições alimentares, preferências e necessidades individuais.',
      care: 'Respeitar a privacidade e evitar julgamentos sobre o corpo, o peso ou os hábitos alimentares.',
      reflection: 'Como tornar o assistente útil para pessoas com rotinas e preferências diferentes?'
    }
  ],
  woman: {
    name: 'Anne-Julie Tessier',
    field: 'Nutrição, Pesquisa Científica, Inteligência Artificial',
    image: 'anne-julie-tessier.jpg',
    bio: 'Anne-Julie Tessier é nutricionista, professora e pesquisadora canadense que estuda a relação entre alimentação e saúde. Ela também é cofundadora da Keenoa, uma empresa que desenvolve tecnologias capazes de reconhecer alimentos por meio de imagens para auxiliar na avaliação alimentar realizada por profissionais de Nutrição.',
    contribution: 'Seu trabalho aproxima a nutrição das tecnologias de reconhecimento de imagens e análise de dados. Essas ferramentas podem ajudar a identificar alimentos registrados em fotografias e facilitar a estimativa do consumo alimentar, apoiando pesquisas e o trabalho de nutricionistas.',
    impact: 'A tecnologia pode tornar o acompanhamento alimentar mais prático e ajudar pesquisadores a compreender os hábitos de alimentação de diferentes populações. Entretanto, reconhecer um alimento por uma fotografia não garante que o sistema estime corretamente sua quantidade, seus ingredientes ou todos os seus nutrientes. A avaliação profissional continua sendo importante.',
    connection: 'No desafio apresentado, uma equipe quer utilizar tecnologia para melhorar a alimentação e reduzir o desperdício. Ferramentas de reconhecimento de alimentos e análise de dados podem ajudar a identificar o que as pessoas consomem, estimar quantidades e planejar refeições. Assim como Anne-Julie Tessier, é possível unir Nutrição e Tecnologia para transformar informações sobre os alimentos em decisões mais conscientes e saudáveis.',
    encouragement: 'Observe como a ciência e a tecnologia podem ajudar a compreender os hábitos alimentares. Inovar também é transformar informações em escolhas mais conscientes.',
    sources: [
      ['Anne-Julie Tessier','https://hsph.harvard.edu/profile/anne-julie-tessier/']
    ]
  }
},


{
  id: 'arquitetura',
  name: 'Arquitetura',
  color: '#9270b5',
  tint: '#f2ebfa',
  icon: 'greek',
  description: 'Projetar espaços seguros, acessíveis, sustentáveis e acolhedores.',

  mission: {
    title: 'Uma escola para todos',
    context: 'Uma escola possui salas muito quentes, rampas difíceis de usar, pouca sombra e poucos espaços de convivência. Alguns estudantes encontram obstáculos para circular, enquanto outros têm dificuldade para se concentrar em ambientes desconfortáveis.\n\n' +
      'A comunidade quer melhorar a escola, mas precisa considerar o orçamento, a segurança, o clima local e as necessidades de estudantes, professores e funcionários. A arquitetura pode ajudar a transformar essas necessidades em espaços planejados para diferentes pessoas.',
    problem: 'Como redesenhar a escola para que ela seja mais acessível, confortável, segura e agradável para toda a comunidade?',
    question: 'Que mudanças no espaço, nos materiais e na circulação você proporia? Como descobriria se elas realmente atendem às necessidades das pessoas?'
  },

  alternatives: [
    {
      title: 'Projeto de espaços acessíveis',
      description: 'Planejar caminhos, entradas, salas e áreas comuns que possam ser utilizados por pessoas com diferentes capacidades e necessidades.',
      how: 'A equipe observaria os obstáculos, ouviria estudantes e funcionários e desenvolveria uma proposta com rotas acessíveis, rampas adequadas, corrimãos, sinalização legível e circulação desimpedida.',
      benefits: 'Pode ampliar a autonomia, facilitar a circulação e tornar os ambientes mais inclusivos.',
      limits: 'As mudanças dependem da estrutura existente, dos recursos disponíveis e das normas técnicas aplicáveis.',
      care: 'Consultar pessoas com deficiência e profissionais habilitados. As soluções precisam respeitar as normas de acessibilidade e segurança.',
      reflection: 'Como você verificaria se uma pessoa que usa cadeira de rodas consegue chegar de forma independente às salas e aos espaços comuns?'
    },
    {
      title: 'Salas mais frescas e eficientes',
      description: 'Melhorar o conforto térmico e aproveitar melhor a iluminação e a ventilação natural.',
      how: 'A equipe estudaria a posição do Sol, os ventos, as áreas de sombra e os materiais do edifício. Poderia propor proteções solares, ventilação adequada, árvores e melhorias no isolamento térmico.',
      benefits: 'Pode aumentar o conforto durante as aulas e reduzir a necessidade de aparelhos de refrigeração e o consumo de energia.',
      limits: 'O resultado depende do clima, da orientação do prédio, das condições da construção e da manutenção.',
      care: 'Avaliar a segurança estrutural, a qualidade do ar, a iluminação e a adequação das soluções ao clima local.',
      reflection: 'Como a posição das janelas e das árvores pode mudar a temperatura de uma sala?'
    },
    {
      title: 'Espaço verde de convivência',
      description: 'Criar uma área de descanso e encontro com plantas, sombra, bancos e caminhos acessíveis.',
      how: 'A comunidade poderia mapear áreas disponíveis e planejar vegetação adequada ao clima, superfícies seguras, assentos e caminhos que permitam a circulação de diferentes pessoas.',
      benefits: 'Pode favorecer o bem-estar, a convivência e o contato com a natureza, além de oferecer sombra.',
      limits: 'O projeto precisa de espaço, recursos, manutenção e escolhas adequadas de plantas.',
      care: 'Escolher espécies apropriadas, prever o uso da água e manter caminhos livres de obstáculos.',
      reflection: 'Como você planejaria um espaço verde que continue agradável e acessível durante todo o ano?'
    }
  ],

  woman: {
    name: 'Zaha Hadid',
    field: 'Arquitetura e design',
    years: '1950–2016',
    image: 'zaha-hadid.jpg',
    bio: 'Zaha Hadid foi uma arquiteta iraquiana-britânica reconhecida por projetos que exploram formas ousadas, curvas e novas maneiras de organizar os espaços. Nascida em Bagdá, estudou matemática antes de seguir sua formação em arquitetura. Sua carreira envolveu projetos de edifícios, espaços culturais e instalações em diferentes países.',
    contribution: 'Hadid desenvolveu projetos arquitetônicos que desafiaram formas tradicionais de conceber edifícios. Entre suas obras conhecidas estão o Centro Aquático de Londres e o Museu MAXXI, em Roma. Seus projetos combinaram experimentação visual, estudos espaciais e o uso de ferramentas avançadas de projeto.',
    impact: 'Em 2004, tornou-se a primeira mulher a receber individualmente o Prêmio Pritzker de Arquitetura. Seu trabalho ampliou o debate sobre as possibilidades da arquitetura contemporânea e influenciou profissionais em diversas partes do mundo.',
    connection: 'Na missão da escola, a arquitetura precisa equilibrar criatividade, acessibilidade, conforto, segurança e recursos disponíveis. Os projetos de Zaha Hadid mostram como explorar novas formas e soluções espaciais; ao mesmo tempo, qualquer projeto para uma escola precisa considerar as necessidades reais de quem utiliza o espaço.',
    encouragement: 'Observe os lugares ao seu redor e imagine como poderiam funcionar melhor. Uma boa ideia arquitetônica combina criatividade com atenção às pessoas.',
    sources: [
      ['The Pritzker Architecture Prize — Zaha Hadid', 'https://www.pritzkerprize.com/laureates/2004'],
      ['Zaha Hadid Architects', 'https://www.zaha-hadid.com/']
    ]
  }
},



{
  id: 'comunicacao',
  name: 'Comunicação',
  color: '#d17b36',
  tint: '#fff1e5',
  icon: 'message',
  description: 'Investigar, produzir e compartilhar informações de forma clara, confiável e acessível.',

  mission: {
    title: 'Informação para todos',
    context: 'Em uma comunidade, avisos importantes chegam apenas por mensagens longas nas redes sociais. Algumas pessoas não têm acesso constante à internet, outras têm dificuldade para ler textos extensos e há moradores que recebem informações sem saber se são verdadeiras ou atuais.\n\n' +
      'A comunidade precisa de uma forma de comunicação que considere diferentes idades, necessidades e meios de acesso. Para isso, será necessário escolher os canais adequados, organizar as mensagens e verificar as informações antes de divulgá-las.',
    problem: 'Como criar um sistema de comunicação que ajude diferentes pessoas a receber, compreender e verificar informações importantes?',
    question: 'Que canais e formatos você escolheria para alcançar mais pessoas? Como garantiria que a mensagem fosse clara, acessível e confiável?'
  },

  alternatives: [
    {
      title: 'Painel de avisos acessível',
      description: 'Criar um painel físico com informações importantes, organizado por assunto e escrito em linguagem simples.',
      how: 'A equipe identificaria os avisos mais necessários, organizaria títulos e datas, usaria letras legíveis e símbolos compreensíveis e escolheria locais de fácil acesso para instalar os painéis.',
      benefits: 'Facilita a consulta rápida e pode atender pessoas que não usam a internet ou não possuem celular.',
      limits: 'Os avisos precisam ser atualizados com frequência, e o painel só alcança quem consegue chegar ao local.',
      care: 'Verificar as informações antes de publicá-las, indicar a data de atualização e evitar expor dados pessoais.',
      reflection: 'Como você organizaria o painel para que as pessoas encontrem rapidamente a informação de que precisam?'
    },
    {
      title: 'Boletim em áudio e formatos acessíveis',
      description: 'Produzir mensagens curtas em áudio e oferecer versões escritas ou visuais para alcançar pessoas com diferentes necessidades.',
      how: 'A equipe prepararia roteiros objetivos, gravaria os avisos e os disponibilizaria em canais adequados. Quando possível, incluiria transcrições, legendas ou versões em linguagem simples.',
      benefits: 'Pode ajudar pessoas com dificuldade de leitura, pessoas com deficiência visual e moradores que preferem ouvir as informações.',
      limits: 'Algumas pessoas podem não ter acesso a dispositivos, internet ou ambientes adequados para ouvir os áudios.',
      care: 'Conferir os fatos antes da gravação, obter autorização para utilizar vozes e proteger os dados das pessoas envolvidas.',
      reflection: 'Como você compartilharia a mesma mensagem com alguém que não tem internet e com alguém que não consegue ouvir um áudio?'
    },
    {
      title: 'Campanha de verificação de informações',
      description: 'Ensinar a comunidade a avaliar notícias e mensagens antes de acreditar nelas ou compartilhá-las.',
      how: 'A campanha explicaria como conferir a autoria, a data, a fonte original e as evidências. Também poderia mostrar como comparar uma informação com publicações de instituições confiáveis.',
      benefits: 'Pode incentivar hábitos de leitura crítica e reduzir o compartilhamento impulsivo de informações enganosas.',
      limits: 'Uma campanha isolada não impede a circulação de conteúdos falsos e não garante que todos verifiquem as mensagens.',
      care: 'Evitar acusações sem provas, respeitar opiniões e distinguir fatos confirmados de dúvidas ou interpretações.',
      reflection: 'Quais passos você seguiria para verificar uma notícia surpreendente antes de compartilhá-la?'
    }
  ],

  woman: {
    name: 'Hedy Lamarr',
    field: 'Invenção, tecnologia e comunicação sem fio',
    years: '1914–2000',
    image: 'hedy-lamarr.jpg',
    bio: 'Hedy Lamarr foi uma atriz e inventora austríaca-americana. Além de sua carreira no cinema, interessava-se por problemas técnicos e desenvolveu ideias relacionadas à transmissão de sinais de rádio. Sua trajetória mostra que pessoas podem atuar em áreas diferentes e que a criatividade pode surgir fora dos caminhos profissionais mais esperados.',
    contribution: 'Durante a Segunda Guerra Mundial, Lamarr e o compositor George Antheil desenvolveram um sistema de salto de frequência para sinais de rádio, pensado para ajudar a proteger a comunicação de controle de torpedos contra interferências. A patente foi concedida em 1942. A proposta não foi usada da forma inicialmente imaginada durante a guerra, mas passou a ser reconhecida como parte da história das técnicas de comunicação por espalhamento espectral.',
    impact: 'Sua contribuição ajudou a chamar atenção para ideias que mais tarde se relacionaram ao desenvolvimento de tecnologias de comunicação sem fio. É importante não atribuir a ela, sozinha, a invenção do Wi-Fi ou do Bluetooth: essas tecnologias resultam do trabalho de muitos pesquisadores e de diferentes avanços técnicos.',
    connection: 'Na missão da comunidade, comunicar bem significa pensar em como a informação é transmitida, quem consegue recebê-la e como evitar falhas. A história de Hedy Lamarr mostra uma ligação entre criatividade, engenharia e comunicação por rádio. Já a clareza e a confiabilidade das mensagens dependem também da forma como o conteúdo é preparado e verificado.',
    encouragement: 'Faça perguntas, experimente ideias e procure compreender como a tecnologia pode ajudar as pessoas a se comunicar melhor.',
    sources: [
      ['National Inventors Hall of Fame — Hedy Lamarr', 'https://www.invent.org/inductees/hedy-lamarr'],
      ['Encyclopaedia Britannica — Hedy Lamarr', 'https://www.britannica.com/biography/Hedy-Lamarr']
    ]
  }
}

  ]
};

# Especificações do Projeto

A concepção deste projeto foi impulsionada pela análise atenta das recorrentes queixas presentes nas redes sociais, que destacavam a dificuldade persistente em encontrar oportunidades profissionais nas atuais plataformas, aliada à crescente complexidade e monotonia dos processos de recrutamento. A proposta centraliza-se na criação de uma plataforma mobile intuitiva, estrategicamente desenvolvida para simplificar o recrutamento, direcionando-se às demandas específicas dos desenvolvedores. Essa abordagem visa não apenas atender às necessidades imediatas dos profissionais de TI, mas também a fomentar o crescimento e a consolidação de uma comunidade de desenvolvedores mais robusta e colaborativa.

## Personas

Ana Garcia tem 22 anos, é estudante de Ciência da Computação e está no último ano de sua graduação em Ciência da Computação. Atualmente está buscando sua primeira oportunidade de emprego na área de desenvolvimento de software. Ela tem boas habilidades técnicas, mas ainda não possui experiência profissional. Ela está em busca de uma plataforma que seja fácil de usar, onde ela possa encontrar vagas relevantes e ter uma experiência transparente no processo seletivo.

Marcos Oliveira tem 35 anos, trabalhou por mais de uma década como gerente de projetos em uma empresa de consultoria, mas recentemente decidiu fazer uma transição de carreira para a área de desenvolvimento de software. Ele está em busca de uma plataforma que o ajude a encontrar vagas que correspondam às suas habilidades e interesses, facilitando sua transição de carreira de forma suave e eficiente.

Rafael Mendes tem 28 anos, trabalhou como desenvolvedor de software em uma empresa de tecnologia por cinco anos, mas recentemente foi demitido devido a uma reestruturação interna. Agora, ele está em busca de uma nova oportunidade que lhe permita continuar sua trajetória e quer encontrar rapidamente uma vaga que corresponda ao seu nível de experiência e expectativas salariais.

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`                | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`                                         |
|-------------------------------------|------------------------------------|------------------------------------------------------------------|
| Estudante de Ciência da Computação | Encontrar vagas de estágio ou para desenvolvedores juniores que se encaixem em meu perfil. | Ter uma chance de aplicar minhas habilidades técnicas e iniciar minha carreira profissional na área de TI. |
| Gerente de Projetos em transição de carreira | Encontrar oportunidades de emprego que valorizem minhas habilidades de gestão de projetos e ofereçam oportunidades de aprendizado e crescimento na área técnica. | Realizar uma transição de carreira suave e eficiente, alinhada às minhas experiências anteriores e interesses. |
| Desenvolvedor de software          | Encontrar rapidamente uma nova oportunidade que corresponda ao meu nível de experiência e expectativas salariais. | Continuar minha trajetória profissional, desenvolver minhas habilidades técnicas e me destacar no mercado de trabalho de TI. |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

| Indicador                           | Objetivo                                                                                                  | Descrição                                                                                                                     | Cálculo                                                    | Fonte de Dados                                 | Perspectiva                                                                                                                                |
|-------------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Taxa de Conversão de Candidatos      | Aumentar a eficiência do processo de recrutamento, convertendo um maior número de candidatos em membros ativos na plataforma | Mede a porcentagem de candidatos que completam o processo de cadastro na plataforma em relação ao total de visitantes           | (Número de candidatos cadastrados / Número total de visitantes) * 100 | Registros de cadastros na plataforma.            | Uma taxa crescente indica uma maior aceitação e adoção da plataforma pelos desenvolvedores, refletindo um aumento na eficiência do processo de recrutamento                                        |
| Tempo Médio de Preenchimento do Perfil | Simplificar o processo para os desenvolvedores, reduzindo o tempo necessário para preencher seus perfis na plataforma | Mede o tempo médio que os desenvolvedores levam para completar o preenchimento do perfil na plataforma                         | Soma do tempo de preenchimento de todos os perfis / Número total de perfis preenchidos                                   | Registros de tempo de preenchimento de perfil na plataforma | Uma redução no tempo médio de preenchimento indica que a plataforma está sendo percebida como intuitiva e amigável, facilitando a adesão dos desenvolvedores                                           |
| Satisfação do Usuário                | Garantir uma experiência positiva para os desenvolvedores na plataforma                                     | Mede a satisfação dos usuários por meio de pesquisas regulares ou feedbacks diretos                                           | Pontuação média de satisfação (em uma escala de 1 a 5, por exemplo) | Pesquisas de satisfação, feedbacks diretos dos usuários | Um aumento na satisfação do usuário é indicativo de uma plataforma bem-sucedida, atendendo às expectativas e necessidades dos desenvolvedores                                                        |
| Taxa de Colocação de Desenvolvedores  | Avaliar a eficácia da plataforma na colocação de desenvolvedores em oportunidades de trabalho              | Mede a porcentagem de desenvolvedores na plataforma que foram colocados com sucesso em posições de trabalho                   | (Número de desenvolvedores colocados / Número total de desenvolvedores) * 100 | Registros de colocação de desenvolvedores       | Uma taxa elevada de colocação indica que a plataforma está cumprindo sua missão de simplificar e melhorar o processo de recrutamento para desenvolvedores                                   |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o sistema autentique os usuários.| ALTA | 
|RF-002| O sistema deve permitir o cadastro, edição, visualização e exclusão de vagas.  | ALTA |
|RF-003| Os usuários devem poder pesquisar vagas com base em critérios como linguagem de programação, nível de experiência, remuneração e localização. | ALTA | 
|RF-004| Os desenvolvedores devem poder enviar seus currículos para as vagas de interesse através do aplicativo.   | ALTA |
|RF-005| Os usuários deverão receber notificações via email de acordo com suas preferências e vagas. | MÉDIA | 
|RF-006| Os usuários recrutadores devem ter acesso ao currículo dos desenvolvedores que aplicarem para a vaga.   | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
| RNF-001 | As informações dos usuários, como dados pessoais e currículos, devem ser protegidas por medidas de segurança, como criptografia. | ALTA | 
| RNF-002 | O aplicativo deve ser compatível com as principais plataformas móveis, como iOS e Android. | MÉDIA | 
| RNF-003 | A interface do usuário deve ser intuitiva e fácil de usar, proporcionando uma experiência amigável aos desenvolvedores e recrutadores. | BAIXA | 
| RNF-004 | O aplicativo deve estar disponível 24/7, com tempo de inatividade mínimo para manutenção programada. | ALTA | 
| RNF-005 | O sistema deve ser capaz de lidar com um aumento significativo no número de usuários e vagas sem comprometer o desempenho. | ALTA | 
| RNF-006 | O aplicativo deve ser responsivo e ter um tempo de carregamento rápido para proporcionar uma boa experiência ao usuário. | MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até a data limite de 23/06/2024. |
|02| O projeto deverá ser desenvolvido usando React Native e ASP.NET Core. |

## Diagrama de Casos de Uso



![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/117364316/c32e0dba-51f8-4ff2-a8e3-e3523715e25b)


# Matriz de Rastreabilidade
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/117364316/0aa10c30-a504-4677-bef0-d39f8f072c82)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

## 1º Etapa:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/106458859/4d4295c5-e407-470a-8ed2-cabb8e412c70)

## 2º Etapa:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/106458859/a544c2c7-c07f-406e-bd41-0264687d4268)

## 3º Etapa:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/106458859/e7b18193-f5e4-4f1f-a1b4-35d54b4f6dfd)

## 4º Etapa:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/106458859/b79133fd-40c3-4244-8e46-533ac4b9e117)

## 5º Etapa:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/106458859/79e771a1-3da8-40cf-9bc4-8cf111e51cc0)

## Gerenciamento de Equipe

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/106458859/b5f77153-5e73-4f09-ba52-9b3717f80218)


## Gestão de Orçamento

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-recrutech/assets/117364316/cb894711-f065-4613-b549-7635d7731e0b)


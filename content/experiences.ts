export type Locale = 'en' | 'es';
export type AgeGroup = '3-5' | '6-10';

type Devotional = { title: string; subtitle: string; verse: string; reference: string; narration: string[]; prompts: string[]; prayer: string };
type Story = { title: string; subtitle: string; minutes: number; pages: string[]; reflection: string; verse: string; prayer: string };

export const morningContent: Record<Locale, Record<AgeGroup, Devotional>> = {
 en: {
  '3-5': {
   title: 'The Shepherd Who Knows You', subtitle: 'A small moment of courage for today',
   verse: 'The Lord is my shepherd; I shall not want.', reference: 'Psalm 23:1 (KJV)',
   narration: [
    'Good morning! Before we begin our day, imagine a fluffy little sheep walking through a big green field. The sheep is small, but it is not alone.',
    'A good shepherd knows every sheep. He guides them to food and water, watches for danger, and comes looking when one wanders away.',
    'The Bible says, “The Lord is my shepherd.” That means God cares for us. We can talk to Him when we feel nervous, happy, or unsure.',
    'Maybe today you will do something new. Maybe you will miss Mom or Dad for a little while. Remember: God knows you, loves you, and goes with you.',
    'Let’s talk about it together, then finish with a short prayer.'
   ],
   prompts: ['What do you think a shepherd does when a sheep feels scared?', 'Is there anything you would like God to help you with today?'],
   prayer: 'Dear God, thank You for knowing me and caring for me. Help me be brave and kind today. Amen.'
  },
  '6-10': {
   title: 'You Are Never Walking Alone', subtitle: 'A conversation for the way to school',
   verse: 'The Lord is my shepherd; I shall not want.', reference: 'Psalm 23:1 (KJV)',
   narration: [
    'Good morning! Think about one thing waiting for you today. Maybe it is a test, a new friend, a difficult conversation, or something you are excited about.',
    'In Psalm 23, David calls the Lord his shepherd. David knew what shepherds did: they guided sheep, protected them, and made sure they had what they needed.',
    'David did not say that every day would be easy. Instead, he trusted that God would stay with him through both peaceful and difficult moments.',
    'Jesus also describes Himself as the good shepherd. He knows His sheep and cares for them. That means you never have to pretend you have everything figured out.',
    'As you head into today, what is one thing you want to trust God with? Talk about it together, and let’s pray.'
   ],
   prompts: ['What is one part of today that feels exciting or challenging?', 'What would it look like to remember God is with you in that moment?'],
   prayer: 'Father, thank You for being near us. Give us courage for what is hard, gratitude for what is good, and love for the people we meet. In Jesus’ name, amen.'
  }
 },
 es: {
  '3-5': {
   title: 'El pastor que te conoce', subtitle: 'Un pequeño momento de valentía para hoy',
   verse: 'Jehová es mi pastor; nada me faltará.', reference: 'Salmo 23:1 (RVR1960)',
   narration: [
    '¡Buenos días! Imagina una ovejita caminando por un campo verde. Es pequeña, pero no está sola.',
    'Un buen pastor conoce a cada oveja. La lleva a encontrar agua y comida, la protege y la busca cuando se aleja.',
    'La Biblia dice: «Jehová es mi pastor». Eso significa que Dios nos cuida. Podemos hablar con Él cuando sentimos alegría, miedo o dudas.',
    'Tal vez hoy harás algo nuevo o extrañarás un poquito a mamá o papá. Recuerda: Dios te conoce, te ama y está contigo.',
    'Conversemos un momento y después hagamos una oración.'
   ],
   prompts: ['¿Qué hace un pastor cuando una ovejita tiene miedo?', '¿En qué te gustaría que Dios te ayude hoy?'],
   prayer: 'Querido Dios, gracias por conocerme y cuidarme. Ayúdame a ser valiente y amable hoy. Amén.'
  },
  '6-10': {
   title: 'Nunca caminas solo', subtitle: 'Una conversación camino al colegio',
   verse: 'Jehová es mi pastor; nada me faltará.', reference: 'Salmo 23:1 (RVR1960)',
   narration: [
    '¡Buenos días! Piensa en algo que te espera hoy. Tal vez tienes una evaluación, conocerás a alguien nuevo o te preocupa alguna conversación.',
    'En el Salmo 23, David llama a Dios su pastor. Él sabía que los pastores guiaban a sus ovejas, las protegían y cuidaban de ellas.',
    'David no estaba diciendo que todos los días serían fáciles. Estaba diciendo que podía confiar en Dios incluso cuando las cosas se ponían difíciles.',
    'Jesús también se presenta como el buen pastor: Él conoce a sus ovejas y las cuida. No necesitas tener todas las respuestas para acercarte a Él.',
    '¿Hay algo que quieras confiarle a Dios hoy? Conversemos y después oremos.'
   ],
   prompts: ['¿Qué parte de hoy te emociona o te preocupa?', '¿Cómo podrías recordar que Dios está contigo en ese momento?'],
   prayer: 'Padre, gracias por estar cerca. Danos valor para lo difícil, gratitud por lo bueno y amor por las personas que encontremos. En el nombre de Jesús, amén.'
  }
 }
};

export const bedtimeContent: Record<Locale, Record<AgeGroup, Story>> = {
 en: {
  '3-5': {
   title: 'Milo and the Red Truck', subtitle: 'A gentle story about sharing', minutes: 5,
   pages: [
    'Milo was a little bunny who loved his red toy truck. It could carry rocks, leaves, and even one very tiny pinecone. Every evening, Milo parked it beside his pillow.',
    'One afternoon, his little sister Lily asked, “Can I have a turn?” Milo held the truck close. “But it’s mine,” he said. Lily looked down at her paws. Milo loved his truck. He loved Lily too. Sharing suddenly felt very hard.',
    'Mama Bunny sat beside him. “It’s okay to love your special things,” she said. “And it’s okay when sharing feels difficult. Would you like to show Lily how the truck works?” Milo thought for a moment. “Maybe I could drive first, and then she can.”',
    'Milo showed Lily how to load the pinecones. Then he handed over the truck. Lily drove it straight into a soft pile of leaves. They both giggled. Soon they were building a whole town together, with roads made of twigs and a bridge made of bark.',
    'At bedtime, Milo parked the truck beside his pillow again. “It was still my favorite truck,” he whispered, “but it was more fun when Lily played too.” Mama smiled. “Love grows when we make room for each other.” Milo closed his eyes feeling warm and safe.'
   ],
   reflection: 'What was hard for Milo? What could you share kindly tomorrow?',
   verse: 'Be kind to one another. — Ephesians 4:32 (paraphrase)',
   prayer: 'Dear Jesus, thank You for the people we love. Help us be kind and generous, even when sharing is difficult. Amen.'
  },
  '6-10': {
   title: 'Oliver and the Missing Invitation', subtitle: 'A story about friendship and feeling left out', minutes: 7,
   pages: [
    'Oliver was seven, and Friday recess was usually his favorite part of the week. He and his friends invented adventures behind the big oak tree: exploring jungles, rescuing lost astronauts, and building invisible castles. But this Friday, when Oliver reached the tree, his friends were already playing a new game. No one had told him about it.',
    '“We planned it yesterday,” said Ben, barely looking up. Oliver felt his stomach twist. Yesterday he had been home with a fever. He watched the others run away and wondered, Did they forget about me? Or did they not want me here? He kicked at a pebble and decided he would never ask to play with them again.',
    'At home, Dad noticed Oliver was quiet. They sat on the edge of his bed while the evening light slipped across the carpet. “Sometimes,” Dad said, “our hearts make up answers when we don’t know the whole story.” Oliver frowned. “But they didn’t invite me.” “That hurt,” Dad agreed. “And you can tell them that. What do you think Ben would say if you asked?”',
    'The next day, Oliver found Ben near the swings. His voice came out smaller than he expected. “I felt left out yesterday. Did you not want me in the game?” Ben stopped swinging. “Oh! We thought you knew. We made the game while you were sick, and then everything happened so fast. I’m sorry.” Oliver felt his shoulders relax. Ben added, “You can be the mapmaker today. We really need one.”',
    'Oliver smiled, but he remembered something else. During recess he had seen a new boy standing alone near the fence. “Could we ask Mateo to join too?” Oliver said. Ben nodded. Together they ran over to invite him. That afternoon the imaginary castle had three new doors, a secret tunnel, and one very important rule: there was always room for someone else.',
    'That night, Oliver and Dad talked again. Oliver had learned that asking a brave question could change a whole day. Dad reminded him that Jesus taught people to love one another. Oliver still knew being left out could hurt, but he also knew he could respond with courage and kindness. Before falling asleep, he whispered a prayer for Ben, Mateo, and tomorrow.'
   ],
   reflection: 'Have you ever felt left out? What might you ask a friend instead of assuming the worst?',
   verse: 'Love one another, as I have loved you. — John 13:34 (paraphrase)',
   prayer: 'Jesus, thank You for loving us. Help us be brave when our feelings are hurt, quick to listen, and ready to include others. Amen.'
  }
 },
 es: {
  '3-5': {
   title: 'Milo y el camión rojo', subtitle: 'Un cuento tranquilo sobre compartir', minutes: 5,
   pages: [
    'Milo era un conejito que adoraba su camión rojo. Podía llevar piedras, hojas y hasta una pequeña piña de pino. Cada noche, Milo estacionaba el camión junto a su almohada.',
    'Una tarde, su hermanita Lily le preguntó: «¿Me lo prestas un ratito?». Milo abrazó su camión. «¡Pero es mío!», dijo. Lily bajó las orejitas. Milo quería mucho su camión y también quería mucho a Lily. Compartir se sentía difícil.',
    'Mamá Coneja se sentó a su lado. «Está bien que quieras cuidar tus cosas especiales», le dijo. «Y también está bien que compartir te cueste. ¿Qué tal si le enseñas a Lily cómo funciona?». Milo pensó un momento. «Primero manejo yo y después ella».',
    'Milo le mostró a Lily cómo cargar las piñas. Después le entregó el camión. Lily lo condujo directo a un montón de hojas suaves. Los dos soltaron una carcajada. Pronto construyeron una ciudad con caminos de ramitas y un puente hecho de corteza.',
    'Al acostarse, Milo volvió a estacionar su camión junto a la almohada. «Sigue siendo mi favorito», susurró, «pero fue más divertido jugar con Lily». Mamá sonrió. «El amor crece cuando hacemos espacio para otros». Milo cerró los ojos, tranquilo y feliz.'
   ],
   reflection: '¿Qué le costó a Milo? ¿Qué podrías compartir con cariño mañana?',
   verse: 'Sean bondadosos unos con otros. — Efesios 4:32 (paráfrasis)',
   prayer: 'Querido Jesús, gracias por las personas que amamos. Ayúdanos a ser amables y generosos, incluso cuando compartir sea difícil. Amén.'
  },
  '6-10': {
   title: 'Oliver y la invitación olvidada', subtitle: 'Un cuento sobre la amistad y sentirse excluido', minutes: 7,
   pages: [
    'Oliver tenía siete años y el recreo de los viernes era su momento favorito. Él y sus amigos inventaban aventuras detrás del gran roble: expediciones por selvas, rescates de astronautas y castillos invisibles. Pero ese viernes, cuando llegó al árbol, los demás ya habían empezado un juego nuevo. Nadie le había contado.',
    '«Lo planeamos ayer», dijo Ben, sin dejar de jugar. Oliver sintió un nudo en el estómago. Ayer había estado enfermo en casa. Miró cómo corrían sus amigos y pensó: ¿Se olvidaron de mí? ¿O ya no quieren jugar conmigo? Pateó una piedrita y decidió que nunca volvería a pedirles que lo invitaran.',
    'En casa, papá notó que Oliver estaba callado. Se sentaron juntos en la cama, mientras la luz de la tarde entraba por la ventana. «A veces», dijo papá, «nuestro corazón inventa respuestas cuando no conoce toda la historia». Oliver frunció el ceño. «Pero no me invitaron». «Eso dolió», respondió papá. «Puedes decirles cómo te sentiste. ¿Qué crees que contestaría Ben si le preguntaras?»',
    'Al día siguiente, Oliver encontró a Ben junto a los columpios. Habló bajito: «Ayer me sentí excluido. ¿Ya no querían jugar conmigo?». Ben dejó de columpiarse. «¡Ay! Creímos que ya sabías. Inventamos el juego cuando estabas enfermo y luego todo pasó tan rápido. Perdón». Oliver respiró más tranquilo. Ben agregó: «Hoy puedes hacer el mapa. ¡Nos hace falta uno!»',
    'Oliver sonrió, pero recordó algo más. En el recreo había visto a un niño nuevo, solo junto a la cerca. «¿Y si invitamos también a Mateo?», propuso. Ben asintió. Corrieron a buscarlo. Esa tarde el castillo imaginario tuvo tres puertas nuevas, un túnel secreto y una regla muy importante: siempre había espacio para alguien más.',
    'Esa noche, Oliver volvió a conversar con papá. Había descubierto que una pregunta valiente podía cambiar todo un día. Papá le recordó que Jesús nos enseñó a amarnos unos a otros. Oliver sabía que sentirse excluido podía doler, pero también que podía responder con valentía y bondad. Antes de dormir, hizo una oración por Ben, Mateo y el día siguiente.'
   ],
   reflection: '¿Alguna vez te has sentido excluido? ¿Qué podrías preguntarle a un amigo antes de pensar lo peor?',
   verse: 'Ámense unos a otros como yo los he amado. — Juan 13:34 (paráfrasis)',
   prayer: 'Jesús, gracias por amarnos. Ayúdanos a ser valientes cuando algo nos duele, a escuchar y a incluir a los demás. Amén.'
  }
 }
};

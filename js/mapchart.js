// setting the access token for MapBox
mapboxgl.accessToken = "pk.eyJ1IjoiY29zbWljcmFpc2lucyIsImEiOiJja2dscHQ3emowMXc5MzJtbHFxZGZwdGh5In0.Vr7PfvCmbLSOAXxvG1g9WA"
// setting mapbox parameters
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v8",
  center: [-71.0589, 42.3601],
  zoom: 10.5
});

// select the map container in HTML and append d3 svg overlay
let container = map.getCanvasContainer();
let svg = d3
  .select(container)
  .append("svg")
  .attr("width", "100%")
  .attr("height", "500")
  .style("position", "absolute")
  .style("z-index", 2);

// connect d3 geocoding to mapboxgl
function project(d) {
  return map.project(new mapboxgl.LngLat(d[0], d[1]));
}

// load data
// TODO: Temporary data
let data = [[-71.07399685, 42.24588679], [-71.12033974, 42.23093432], [-71.20454000000001, 42.24248], [-71.20525566, 42.24329408], [-71.34726373, 42.28224185], [-71.01993885, 42.03793026], [-71.21746128, 42.36842553], [-70.67436669, 42.62042758], [-71.03323663, 42.12179488], [-71.03510998, 42.09012929], [-71.41901883, 42.27222594], [-71.21844135, 42.50602674], [-71.11610886, 42.55597581], [-71.51976317, 42.34956928], [-71.07155768, 42.45929827], [-71.5684779, 42.60588646], [-71.47876884, 42.13459086], [-71.03936018, 42.39459126], [-71.23909167, 42.36158068], [-71.00709191, 42.2448504], [-70.95299458, 42.46453673], [-71.40978614, 42.68572958], [-70.99520123, 42.57528142], [-71.33560749, 42.63851171], [-71.22623593, 42.64569661], [-71.08335456, 42.04917358], [-71.04564359, 42.39091346], [-70.78277575, 41.93626922], [-70.88273684, 42.55930109], [-71.19041679, 42.38725284], [-71.15788944, 42.7077351], [-71.42837483, 42.27584467], [-71.45798003, 42.53909779999999], [-71.24265055, 42.36312104], [-71.4021173, 42.27409735], [-71.03320212, 42.39327691], [-70.93738569, 42.45702697], [-71.17035013, 42.22374346], [-71.36077661, 42.29981082], [-70.93648345, 42.53031154], [-70.99471014, 42.26024069], [-71.31257423, 42.58864758], [-71.15063446, 42.23073421], [-70.6473956, 41.93280581], [-71.18488429, 42.35611832], [-71.02152192, 42.43615376], [-71.09066097, 42.51403729], [-71.04363021, 42.39290417], [-71.42920981, 42.29507723], [-70.96989375, 42.37044374], [-71.17446308, 42.71590949], [-71.18020886, 42.55481228], [-71.10505031, 42.40113261], [-71.02102461, 42.20854587], [-70.86321984, 42.27668514], [-71.42722099, 42.48009626], [-71.55973276, 42.35647048], [-71.1807337, 42.72019049], [-71.23462223, 42.34468936], [-71.09810612, 42.37338549], [-71.23525709, 42.29334427], [-71.40416795, 42.1532805], [-71.05138669, 42.35812039], [-70.97672495, 42.13087422], [-70.67751063, 42.62384682], [-71.10794681, 42.37205552], [-71.53523265, 42.09289184], [-71.32962842, 42.62707655], [-71.40825229999999, 42.47491249], [-71.11320493, 42.50178718], [-70.67593335, 42.62246819], [-71.23448561, 42.36739532], [-71.0564598, 42.42836347], [-71.11705756, 42.47936099], [-71.18641344, 42.7210258], [-71.5074431, 42.48142447], [-71.25701997, 42.41744576], [-71.38525953, 42.65115374], [-71.34051369, 42.2850904], [-71.04386967, 42.28399212], [-70.98726803, 42.38205636], [-70.7937732, 42.163673700000004], [-70.97632891, 42.08921228], [-71.06139704, 42.12173296], [-71.07261117, 42.35741518], [-71.4783173, 42.54950826], [-70.99194785, 42.40548575], [-71.18738026, 42.73397427], [-71.07652688, 41.88372213], [-71.09722199, 42.36153877], [-70.87665153, 42.29002832], [-71.21884719, 42.0320012], [-70.97922838, 42.42877749], [-71.03762444, 42.56333783], [-71.11162015, 42.78230023], [-71.04331892, 42.165659999999995], [-70.93975292, 42.4699659], [-71.04447656, 42.39243487], [-71.30913236, 42.66979001], [-71.13423295, 42.33878272], [-71.23011340000001, 42.31671115], [-71.24701999999999, 42.2943], [-71.03630961, 42.39374543], [-71.06296297, 42.341500700000005], [-71.15563038, 42.71243362], [-71.39279768, 42.55172604], [-71.32911387, 42.06577033], [-71.51630572, 42.51414174], [-70.75344023, 42.08383821], [-71.15820381, 42.36286876], [-71.09600214, 42.36083644], [-71.08865198, 42.81010507], [-70.97053679, 42.56819615], [-71.24458117, 42.59568014], [-71.1943814, 42.31895051], [-71.34977692, 42.28750494], [-71.55544326, 42.47395584], [-71.06552148, 42.0599871], [-71.35390992, 42.60295341], [-71.43154807, 42.2413719], [-71.25910288, 42.43725579], [-71.01295833, 42.48495107], [-71.18987766, 42.66679824], [-71.01743316, 42.05963607], [-71.01559984, 42.59491158], [-71.05203884, 42.35512777], [-71.46508654, 42.26059856], [-70.96818233, 42.46624183], [-71.44959378, 42.29792379999999], [-71.04243843, 42.07451622], [-71.39953555, 42.37679514], [-71.09263003, 42.20295002], [-71.09005718, 42.77795457], [-71.06881136, 42.15718336], [-71.0795854, 42.3098796], [-71.12078305, 42.77435408], [-71.42744, 42.165490000000005], [-71.06804885, 41.96267586], [-71.12178317, 42.6103984], [-71.54265140000001, 42.34233509], [-71.19031833, 42.72992683], [-71.20992853, 42.70198837], [-71.27797537, 42.57255229], [-71.23924779, 42.38978151], [-71.16602585, 42.70187159], [-71.22735997, 42.08959001], [-70.77314575, 42.10753341], [-70.88892847, 42.2426656], [-71.31032614, 42.66248902], [-71.11266873, 42.78784681], [-70.97849206, 42.06344514], [-70.89638343, 42.57688494], [-71.30866865, 42.5720019], [-71.01305406, 42.07663254], [-71.54925758, 42.27193891], [-71.54429211, 42.38785012], [-71.14197403, 42.02345369], [-71.13559565, 42.45593503], [-70.91085083, 42.18003704], [-71.02511717, 42.08625467], [-70.93284778, 42.51986151], [-70.95583155, 42.19953165], [-70.91779151, 42.47848702], [-71.12654186, 42.41308855], [-70.65724887, 41.93971638], [-71.15493348, 42.71827877], [-71.17010418, 42.72045829], [-70.99613000000001, 42.25476], [-71.10945241, 42.50210846], [-70.97679024, 42.45284414], [-71.06544226, 42.20585425], [-71.52075855, 42.13348399], [-71.66576974, 42.66113578], [-71.18813369, 42.33379758], [-71.26431253, 42.34375612], [-71.02218961, 42.43098184], [-71.13481657, 41.92983596], [-71.28239593, 42.07936575], [-71.25635954, 42.34351195], [-71.12170393, 41.88878225], [-70.98150503, 42.22135711], [-71.11796347, 42.22363005], [-70.97307832, 42.5214805], [-71.55951419, 42.34590299], [-71.21139523, 42.6626668], [-71.44473451, 42.29892539], [-71.2529337, 42.54321176], [-70.95290332, 42.46754089], [-71.13972449, 42.68464873], [-71.16841298, 42.5427523], [-71.20428888, 42.70668828], [-71.12985501, 42.49089742], [-70.94874962, 42.10592443], [-71.09733362, 42.33843076], [-71.01405508, 42.06782727], [-70.87872461, 42.54828482], [-71.00457302, 42.27511517], [-70.97793989, 42.219745399999994], [-71.11271581, 42.66365564], [-71.18545017, 42.68673456], [-70.88865294, 42.16446477], [-70.87165317, 42.80742736], [-71.26137421, 42.48613136], [-71.11144224, 42.23436193], [-71.22771469999999, 42.37931406], [-71.05560514, 42.32414632], [-71.20756568, 42.72348806], [-71.44060269, 42.47308391], [-70.94660032, 42.57273951], [-71.10110512, 42.34783398], [-71.13377238, 42.23964227], [-71.06733277, 42.02475541], [-71.06173702, 42.06187578], [-71.18465092, 42.56559612], [-71.09002502, 41.78470161], [-71.0271123, 42.27228237], [-71.31362007, 42.64487697], [-70.92450971, 42.211389600000004], [-71.00119357, 42.40916878], [-70.95535145, 42.16921236], [-71.11485284, 42.28235669], [-71.57504582, 42.34110916], [-71.02282094, 42.43724289], [-71.26812885, 42.48819895], [-71.50904432, 42.3469578], [-71.42934882, 42.29934814], [-71.07556315, 42.3782635], [-71.04940813, 42.30127447], [-71.04112633, 41.90848304], [-71.18901516, 42.48369928], [-71.21271009, 42.30057488], [-70.75763232, 41.97312678], [-71.35360920000001, 42.59689086], [-71.17715150000001, 42.35791555], [-71.57762025, 42.55761724], [-71.08725613, 42.06673247], [-71.20699469, 42.26451291], [-71.01943033, 42.10179088], [-70.95629405, 42.46372569], [-70.98273378, 42.46512191], [-71.10042, 42.123259999999995], [-71.06891999999999, 42.15773], [-70.94852179, 42.45867049], [-71.0085338, 42.09633227], [-71.11790525, 42.42121532], [-70.97736613, 42.0479967], [-70.70675544, 41.98013577], [-70.93083353, 42.02652099], [-71.0315195, 41.90050022], [-71.03956573, 42.13046497], [-71.43372865, 42.69090404], [-71.00957, 42.127390000000005], [-71.28554376, 42.5617089], [-71.13067439, 42.40906385], [-70.96942149, 42.45924897], [-71.01042067, 42.25595333], [-71.02906948, 42.23345425], [-71.16941276, 42.71380106], [-71.20235347, 42.29934941], [-71.23628199, 42.40949323], [-70.90677523, 42.84608938], [-71.32616404, 42.64408408], [-70.90855004, 42.53071847], [-71.42451056, 42.09059379999999], [-71.04910582, 42.27708741], [-71.42905439, 42.27140593], [-71.07543429, 42.77050403], [-70.89153205, 42.56424292], [-70.99737885, 42.12440238], [-71.3039398, 42.36467179], [-71.09336412, 42.40546044], [-71.3513512, 42.63575428], [-71.06881136, 42.15718336], [-71.04464143, 41.86477175], [-71.10311807, 42.18178888], [-71.15787783, 42.71477911], [-70.88262861, 42.8061343], [-71.19312, 42.17873], [-70.99599108, 42.80997798], [-70.94658045, 42.17780846], [-71.16165451, 42.37511063], [-71.32005482, 42.62220682], [-71.02257779, 42.4366749], [-71.31340299, 42.58933337], [-71.06808000000001, 42.15376], [-71.54179451, 42.26147279999999], [-71.26904677, 42.55773377], [-70.87768049, 42.11056371], [-71.04697929999999, 41.90649605], [-71.07719234, 42.77714945], [-71.5195614, 42.14633537], [-70.85451345, 42.00093649], [-70.86920627, 42.85334983], [-71.17196556, 42.34664889], [-70.86784178, 42.49447431], [-70.99335136, 42.52681328], [-71.06608803, 42.02487562], [-71.40670222, 42.30078819], [-70.98827637, 42.46106392], [-71.311887, 42.65833736], [-70.95275004, 42.17350522], [-71.30794967, 42.62771353], [-71.32445859, 42.66378314], [-71.47277929, 42.11392681], [-71.45498006, 42.46107955], [-71.08984119, 42.13219727], [-70.93647440000001, 42.07863403], [-70.80401546, 41.92193041], [-71.16353389, 42.71303582], [-71.58284026, 42.61712266], [-71.05143494, 42.35707263], [-71.14207062, 42.32578829], [-71.59471956, 42.43117294], [-71.16878866, 42.52073115], [-70.76037313, 42.16921458], [-71.36085778, 42.29995895], [-71.70577498, 42.66694645], [-71.16763969, 42.49960036], [-71.35885312, 42.61198263], [-71.24182188, 42.32467492], [-71.12593398, 41.90522691], [-71.08029873, 42.76450681], [-71.32776851, 42.63491846], [-71.4773848, 42.54935785], [-70.88128302, 42.54237872], [-71.02124033, 41.94743902], [-70.92005176, 42.84668104], [-71.00815779, 42.07809566], [-71.21123891, 42.34418456], [-71.11130209999999, 42.41865283], [-71.01555483, 42.59483511], [-70.96362133, 41.90282193], [-71.39092593, 42.46567237], [-71.32376135, 42.64345536], [-71.47582487, 42.24623016], [-71.10474244, 42.53497329], [-71.02075804, 42.13144383], [-70.67279438, 42.61904811], [-71.3536166, 42.60116939], [-71.04284329, 42.3933675], [-70.89959252, 42.52813616], [-71.17758301, 42.33521207], [-71.02859283, 42.39589285], [-71.41490948, 42.28233815], [-70.88341954, 42.30185861], [-71.0977252, 42.79811783], [-70.99014661, 41.794816299999994], [-71.39976812, 42.12578884], [-70.94765477, 42.12317214], [-71.08688463, 42.78470065], [-71.51283399, 42.20916343], [-71.20379576, 42.73173434], [-71.23367636, 42.33928770000001], [-71.50488566, 42.57822324], [-70.99509451, 42.24513974], [-71.44373764, 42.16634808], [-71.41451808, 42.29791263], [-71.1342412, 42.51252724], [-71.09081397, 42.7784591], [-70.99133102, 41.84956697], [-71.11794241, 42.41908936], [-71.06507226, 42.06032585], [-71.08675563, 42.79109589], [-71.03618277, 42.5108842], [-71.04415066, 41.90652206], [-71.23798513, 42.49703204], [-71.25337844, 42.41437935], [-70.91627001, 41.8930316], [-71.21503891, 42.4778174], [-71.00778474, 42.41673972], [-70.99829345, 42.52075501], [-71.18416395, 42.35739822], [-71.09369241, 42.40559421], [-71.33636627, 42.6762164], [-71.13225718, 42.73909146], [-70.80953595, 42.15998601], [-71.05408179, 42.40306765], [-70.86920627, 42.85334983], [-71.15184592, 42.71328371], [-71.32685066, 42.06581861], [-71.02718313, 42.38787539], [-71.36077661, 42.29981082], [-71.01055763, 42.569278499999996], [-71.08896334, 42.71303468], [-71.13697212, 42.69630079], [-71.06414655, 42.41989705], [-71.05138669, 42.35812039], [-71.16334807, 42.69704267], [-70.8821002, 42.54668835], [-71.11713, 42.34343], [-71.13902771, 42.72884521], [-71.40403811, 42.5407495], [-70.92488376, 42.20896176], [-71.21753000000001, 42.30603], [-70.76286151, 42.10784389], [-71.14853000000001, 42.15197], [-71.15722895, 42.39087683], [-71.15703386, 42.45166383], [-71.22924074, 42.03047233], [-70.97055851, 42.45852066], [-71.39608659, 42.32138884], [-71.10653849, 42.39675664], [-71.55769614, 42.34394355], [-71.16519277, 42.40287402], [-70.95545877, 42.17396761], [-71.08998023, 42.36261093], [-70.98243529, 42.50649995], [-71.12974546, 42.67598342], [-70.97011036, 42.37090745], [-71.10500136, 42.55416012], [-71.03712698, 42.39261072], [-71.04137, 42.16261], [-70.6489247, 42.61133624], [-70.98608569, 42.42528571], [-71.01842745, 42.07151029], [-71.02353740000001, 42.23757187], [-71.15006289, 42.47249111], [-71.29885, 42.09106], [-71.34728341, 42.28082121], [-71.32048988, 42.60748496], [-71.50847774, 42.16234997], [-71.06076008, 42.46347705], [-71.23054691, 42.37030698], [-70.98948333, 41.91855581], [-70.97020659, 42.46011912], [-71.31280337, 42.58893556], [-71.14747385, 42.70114179], [-70.74065709, 42.08297889], [-71.02626583, 42.0704646], [-71.20481032, 42.18035595], [-71.06891999999999, 42.15773], [-70.95579435, 42.19840981], [-71.00585587, 42.01946773], [-71.31156144, 42.65663882], [-71.09098649, 42.79881336], [-71.03816329, 42.28353941], [-71.14035861, 42.72698951], [-71.04263058, 42.26094866], [-71.42105027, 42.57313905], [-71.132889, 42.32890289], [-71.55751703, 42.28943868], [-71.20101053, 41.97689093], [-70.97937564, 42.38172607], [-71.32882483, 42.64825885], [-71.11126534, 42.35195128], [-71.47145037, 42.11401956], [-70.88634934, 42.54597565], [-71.35048769, 42.51917127], [-71.22232005, 42.08869001], [-71.16894374, 42.71955339], [-71.4061435, 42.63213270000001], [-71.27411636, 42.62863008], [-70.66123129, 42.62569977], [-71.4843635, 42.55476289], [-71.10104684, 42.4198794], [-71.52303677, 42.14359804], [-70.92547484, 42.0636141], [-71.09198066, 41.89884305], [-71.17415551, 42.71210471], [-71.23821982, 42.36767264], [-71.11354579, 42.41352058], [-71.02047188, 42.0877315], [-71.48773761, 42.13065181], [-70.94749, 42.22694], [-71.50781837, 42.52293208], [-71.26411084, 42.72542945], [-71.12262804, 42.40155733], [-71.0817345, 42.42172142], [-71.20525566, 42.24329408], [-70.75890467, 42.1444129], [-71.26596777, 42.67213988], [-71.09604464, 41.92046747], [-71.0275683, 42.39749022], [-71.12406228, 42.06689575], [-71.13696219, 42.730686], [-71.22448192, 42.03104715], [-71.22629606, 42.030818700000005], [-71.19659990000001, 42.33026692], [-71.0143243, 42.40642173], [-71.07359608, 42.776287700000005], [-70.76109746, 42.59060809], [-70.92148303, 42.52484915], [-70.97041531, 42.49576602], [-71.13369073, 42.67949168], [-71.12324778, 42.41250784], [-71.02385559, 42.45604611], [-70.93538308, 42.11312425], [-70.9545778, 42.52790767], [-71.16009890000001, 42.69125949], [-71.20198346, 42.73490907], [-71.07044916, 42.362986], [-71.23676016, 42.37511651], [-71.11035478, 42.37823998], [-70.94871695, 42.11209958], [-71.03695769, 42.08056998], [-71.37744244, 42.31181724], [-71.15340962, 42.70059893], [-71.3292408, 42.63027087], [-70.92723108, 42.195510600000006], [-71.23047685, 42.30426246], [-71.06758627, 42.10209652], [-71.15789196, 42.71821228], [-71.37692195, 42.30029604], [-71.24350731, 42.37625833], [-71.52077775, 42.29238343], [-71.23409244, 42.03135525], [-71.59694405, 42.37155972], [-71.02222451, 41.94802118], [-70.99483171, 41.98002015], [-71.2370056, 42.37075705], [-70.9534408, 42.05186191], [-71.32075947, 42.63092483], [-71.08936366, 42.51666834], [-71.10500136, 42.55416012], [-71.21630821, 42.47979046], [-70.88874306, 42.85732245], [-71.23422937, 42.31675418], [-71.20895741, 42.0258496], [-71.29279629, 42.61692804], [-71.07165584, 42.50519583], [-71.38311147, 42.08501732], [-71.06113129, 42.34539716], [-70.96221291, 42.214974700000006], [-71.18458309999998, 42.18825793], [-71.06263281, 42.36807695], [-70.86994042, 42.81148552], [-70.88351153, 42.56108163], [-71.32338248, 42.62766783], [-70.72374297, 42.09654176], [-71.45376362, 42.47486682], [-71.15880925, 42.71477399], [-71.15524504, 42.61560078], [-71.01620555, 42.59513], [-70.69911041, 42.62577058], [-71.10197328, 42.45750892], [-70.99991711, 42.20585071], [-70.89489, 42.16544047], [-70.85552461, 42.49934381], [-71.70577497, 42.66694644], [-71.11381076, 42.36512009], [-71.20629933, 42.69065396], [-71.08367077, 42.31378834], [-71.11027575, 42.41732454], [-71.08504567, 42.34282494], [-71.17443243, 42.70451851], [-71.07935685, 42.73460365], [-71.31910490000001, 42.630790399999995], [-71.04269000000001, 42.164629999999995], [-71.17459314, 42.38050922], [-71.03778715, 42.06661488], [-71.09989877, 41.902507899999996], [-70.95524249, 42.14745413], [-70.93532412, 42.49143562], [-71.03403829999999, 42.24545235], [-70.94249715, 41.99030008], [-71.037247, 42.41339105], [-71.22689423, 42.36913798], [-71.03026263, 42.75751783], [-71.18735006, 42.21890197], [-71.12071077, 42.49947751], [-71.10815851, 42.36408076], [-71.08403616, 42.79377066], [-71.55145702, 42.38795856], [-71.28003899, 42.5378659], [-71.11434065, 41.90192847], [-70.93738569, 42.45702697], [-70.95520852, 42.19438294], [-71.00412768, 42.42194271], [-71.09668441, 42.09889238], [-71.09444, 42.129090000000005], [-70.90733368, 42.13089534], [-71.04245144, 41.90635325], [-71.05260186, 42.36000532], [-71.07846495, 42.50573454], [-71.09371105, 42.37281034], [-70.95751068, 42.47647497], [-71.17560207, 42.22485437], [-71.27662101, 42.65829893], [-70.99701, 42.26403], [-71.28201949, 42.69836225], [-71.25412824, 42.33113221], [-71.23121856, 42.42870279], [-71.1880294, 42.33415042], [-71.02124033, 41.94743902], [-70.97539777, 42.2177126], [-71.12534431, 42.67289417], [-71.20132217, 42.19547526], [-71.2736467, 42.56685337], [-71.43405492, 42.6127274], [-71.02664473, 42.094117700000005], [-71.61644217, 42.63772725], [-71.11044684, 42.41597087], [-71.00680401, 42.59554871], [-71.0094704, 42.09602196], [-71.20577778, 42.51527496], [-71.23963, 42.16088], [-71.03963908, 42.11992735], [-71.14102182, 42.38689316], [-71.16303951, 42.66535758], [-70.98621797, 42.26217368], [-71.12047225, 42.38904047], [-70.93535198, 42.53785666], [-71.01742681, 42.09060478], [-70.94740498, 42.47121668], [-70.93816674, 42.07103852], [-71.18136063, 42.62355572], [-71.12573804, 42.26213919], [-70.93820443, 42.53992818], [-71.37530814, 42.2847414], [-71.06887543, 42.49294693], [-71.09186166, 41.87251273], [-71.30905957, 42.63325788], [-71.33149833, 42.65016447], [-71.11577355, 42.77486946], [-71.25412824, 42.33113221], [-71.00399859, 42.23940382], [-71.21532164, 42.70340554], [-71.11721929, 42.76965054], [-71.02859283, 42.39589285], [-71.10303173, 42.53004039], [-71.32666108, 42.65412917], [-71.39778952, 42.46713875], [-71.12245395, 42.3698162], [-71.07598128, 42.35226003], [-71.09856351, 42.5048723], [-70.88002232, 42.55825286], [-71.00706885, 42.51200984], [-71.10018273, 42.48286145], [-71.13472141, 42.74567045], [-70.75719334, 41.95075609], [-71.02514968, 42.46597936], [-71.14368950000001, 42.48159133], [-71.43506824, 42.30825919], [-70.93719047, 41.90370522], [-70.95081156, 42.45717439], [-71.11942379, 42.3952347], [-71.01423373, 42.06462439], [-71.21300968, 42.7047842], [-71.14992315, 42.21309102], [-71.35122682, 42.45964793], [-71.18902, 42.192409999999995], [-71.47282709999999, 42.54651178], [-71.56805589, 42.36838395], [-71.09630809, 42.35943891], [-71.0044, 42.24151], [-71.01198416, 42.40311027], [-71.2895819, 42.45740239], [-71.15788944, 42.7077351], [-70.96252423, 42.46001149], [-71.04331893, 42.165659999999995], [-71.00085, 42.246790000000004], [-71.00349961, 42.51439187], [-71.49767469, 42.56265877], [-71.00842258, 42.09618882], [-71.14187772, 42.69787355], [-71.00758637, 42.16914588], [-71.09268025, 42.35736869], [-71.07823774, 42.52304982], [-71.00734263, 42.44885072], [-71.17549765, 42.57639019], [-71.08705947, 42.42524557], [-71.50804040000001, 42.52069496], [-71.49983225, 42.15957968], [-71.01718249999999, 42.3663295], [-71.41306699, 42.41546361], [-70.97016857, 42.09261635], [-70.99038921, 42.51096941], [-71.07977432, 42.779778799999995], [-70.9430757, 42.10997498], [-71.1299934, 42.39959726], [-70.8903446, 42.79490248], [-70.95887073, 42.45728287], [-71.21974991, 42.50591421], [-71.23093537, 42.50408124], [-71.23409113, 42.40383456], [-71.22232005, 42.08869001], [-71.44237685, 42.68072844], [-71.08692334, 42.27275928], [-70.92147029, 42.21512735], [-71.04182038, 42.24128105], [-71.24325583, 42.34722863], [-71.22729804, 42.22162336], [-70.82337999, 42.234759999999994], [-71.19199406, 42.21375655], [-70.93888867, 42.56264352], [-71.20818, 42.24664], [-71.05031398, 42.27466587], [-71.05329504, 42.29108809], [-71.30225265, 42.61928857], [-70.94218447, 42.54333849], [-71.26308846, 42.43059021], [-71.06835748, 42.50341979], [-70.91229053, 42.5084554], [-71.50346524, 42.10069257], [-71.0912906, 41.9165544], [-71.18160526, 42.55717085], [-71.10078003, 42.1353859], [-71.09009426, 41.92593129], [-71.08796497, 42.35221488], [-70.95854240000001, 42.03188158], [-71.02507657, 42.46554349], [-71.45036305, 42.48037871], [-71.22761737, 42.47453968], [-71.22208015, 42.20908067], [-71.23026292, 42.28689002], [-71.15787055, 42.713767499999996], [-70.94199422, 42.53771225], [-71.21251803, 42.31878667], [-71.14061758, 42.731179299999994], [-70.99164405, 42.24141951], [-71.04992067, 41.86814499], [-71.35478081, 42.68259478], [-71.01978738, 42.09781515], [-71.04137, 42.16261], [-71.09060427, 42.382459600000004], [-70.72169276, 42.6177438], [-70.98736625, 42.52189099], [-71.16948753, 42.38524993], [-71.12742612, 42.49855503], [-71.15711481, 42.69856526], [-70.88211238, 42.54389831], [-71.12830228, 42.6748477], [-71.04003298, 42.25566376], [-71.72272679999999, 42.64445624], [-71.12596553, 42.67323435], [-70.69473294, 41.97811726], [-71.26914957, 42.55957803], [-71.18812787, 42.36927909], [-71.02539786, 42.4663756], [-71.46215, 42.11468], [-71.1091822, 41.90663547], [-71.07919368, 42.37093092], [-71.05260185, 42.36000532], [-71.04328909, 42.40923282], [-70.95275004, 42.17350523], [-71.25894, 42.10195], [-70.96224834, 42.46265926], [-71.17116593, 42.22264283], [-71.31149557, 42.61022305], [-71.32187224, 42.636754700000004], [-71.20658376, 42.69127741], [-71.24771828, 42.37529799], [-71.47936845, 42.29690834], [-71.13106626, 42.42106666], [-71.42758393, 42.09016967], [-71.03199346, 42.2226641], [-71.01857369, 41.90636675], [-71.35427691, 42.68210679], [-71.1433665, 42.74301092], [-71.55915203, 42.16015915], [-71.05471583, 41.87523525], [-70.89261515, 42.51519181], [-71.14866275, 42.15179781], [-71.41984606, 42.26761034], [-71.08351344, 42.41186843], [-71.05560514, 42.32414632], [-71.31232381, 42.64076182], [-70.92992957, 42.55853319], [-71.08261403, 42.4583224], [-70.97976905, 42.54447406], [-71.13190366, 42.39884546], [-71.06881136, 42.15718336], [-70.96002655, 42.48728184], [-71.29265782, 42.56135048], [-71.02158277, 42.10484996], [-70.66885978, 42.61602096], [-71.15215732, 42.70249297], [-71.20213787, 42.51256285], [-71.37738619, 42.30112623], [-71.09674826, 42.38033038], [-70.943947, 42.08588158], [-71.48835285, 42.53940511], [-71.11203264, 42.5798821], [-71.04353913, 42.07631267], [-70.96043373, 42.486032], [-71.09641739, 42.2930383], [-71.01622564, 42.26800236], [-70.9588229, 41.90323269], [-70.9899299, 42.05484325], [-71.11923735, 42.77455301], [-71.19832277, 42.56603739], [-71.31078000000001, 42.12042], [-70.9926661, 42.59607976], [-71.05974542, 42.09281938], [-71.02507657, 42.46554349], [-71.16156190000001, 42.49873432], [-71.22257204, 42.29982552], [-71.17138008, 42.1710718], [-71.1180434, 42.36416923], [-71.09050787, 42.79851044], [-71.41446688, 42.4794551], [-70.87993865, 42.23090835], [-71.28322312, 42.30954166], [-71.05575, 42.16628], [-70.87759562, 41.91445676], [-71.08079357, 42.30873223], [-71.06075906, 42.19520449], [-71.21378111, 42.31105869], [-70.80993498, 42.05590170000001], [-70.97002152, 42.49636536], [-71.07951926, 42.40708093], [-71.25950984, 42.6205983], [-70.92250688, 42.21529739], [-70.86178576, 42.49474553], [-71.03169416, 42.09071241], [-71.35117086, 42.59354867], [-71.2622628, 42.39357885], [-71.13355195, 42.40690539], [-71.32497, 42.06556], [-71.01985001, 42.08493218], [-71.47277929, 42.11392681], [-71.57762025, 42.55761724], [-70.93112444, 42.07137001], [-70.92341318, 42.524224600000004], [-71.22806571, 42.37744571], [-71.22227971, 42.08150991], [-71.27081542, 42.45078652], [-71.02561482, 42.46761194], [-71.23748877, 42.31643392], [-70.94303994, 42.873617100000004], [-71.15339985, 42.69828820000001], [-71.27134337, 42.62786965], [-71.28547283, 42.536362], [-71.15219867, 42.47995963], [-71.22947908, 42.12151854], [-71.04386967, 42.28399212], [-71.25642124, 42.58271885], [-70.72809111, 42.01383633], [-71.24094509, 42.53892082], [-70.95941708, 42.17736796], [-71.56598406, 42.39115322], [-71.04724397, 42.17220875], [-71.03816749, 42.2523172], [-71.08778958, 42.074616999999996], [-71.06395889, 42.33364341], [-71.01572789, 42.0643201], [-70.91603877, 42.46757013], [-70.96485958, 42.45977704], [-71.05708755, 42.42643578], [-70.89765378, 42.52244412], [-71.08986715, 41.88582495], [-71.13472141, 42.74567045], [-70.99288439, 42.20589615], [-71.11886567, 42.50230895], [-70.91610408, 42.82136143], [-71.44538358, 42.31057456], [-70.93585559, 42.08073671], [-71.06881136, 42.15718336], [-71.19467264, 42.37061125], [-71.05814864, 42.36374339], [-71.11794212, 42.4981851], [-71.56896978, 42.38307749], [-71.26415585, 42.57117166], [-71.2107647, 42.47908023], [-71.48589343, 42.2918559], [-70.93326493, 42.47038197], [-70.93675125, 42.07895678], [-70.99111162, 42.373991100000005], [-71.00181915, 42.08275677], [-71.11428617, 42.48227534], [-71.148143, 42.326612], [-70.94080477, 42.54224704], [-70.86992399, 41.99302206], [-71.04395149, 42.01453963], [-70.67553205, 42.10561362], [-70.67593335, 42.62246819], [-71.16037236, 42.74529847], [-71.56447275, 42.55093795], [-71.10261423, 42.50366618], [-71.55245143, 42.36121854], [-71.06108681, 42.4008379], [-71.01724194, 42.08403829], [-71.01039748, 41.94916217], [-71.56216624, 42.37243228], [-70.9338912, 42.57349034], [-71.39726740000002, 42.29867658], [-70.95520293, 42.47116975], [-71.37046169, 42.36324846], [-71.30083151, 42.29743921], [-71.03093433, 42.07828293], [-71.30873499, 42.63961639], [-71.12815868, 42.34769164], [-71.15246885, 42.50015691], [-71.09298354, 42.77091194], [-71.11025, 42.13387], [-71.07403085, 42.35594005], [-71.09159373, 42.34918942], [-71.52303677, 42.14359804], [-70.68006601, 41.95551043], [-71.27134337, 42.62786965], [-71.28003899, 42.5378659], [-70.96189106, 42.01394556], [-71.27550515, 42.68544769], [-70.87151128, 42.23931109], [-71.4472427, 42.43132795], [-71.14187772, 42.69787355], [-71.05170029, 41.90589361], [-71.16686206, 42.69168033], [-71.45981215, 42.28892656], [-70.85806532, 42.1295512], [-70.99703148, 42.54302837], [-70.95959293, 42.87143551], [-70.99788189, 42.10758551], [-70.89320711, 42.57195933], [-71.23487491, 42.28492932], [-71.08795129999999, 42.37342102], [-70.99180662, 42.51212242], [-71.1408191, 41.91121604], [-71.13101913, 42.27536627], [-70.66187307, 41.95333323], [-71.10084677, 42.46577962], [-70.92809466, 42.55799414], [-71.07753616, 42.19309181], [-71.15859925, 42.376217499999996], [-70.67547951, 42.62198836], [-71.06330190000001, 42.75005031], [-71.23161221, 42.36066229], [-71.30623829, 42.67524684], [-71.25302324, 42.34515496], [-70.76675982, 42.10840662], [-71.14156414, 42.50267671], [-71.12491637, 42.52561507], [-70.95836452, 42.473957500000004], [-71.10581999, 42.37122202], [-71.00664111, 42.05700029], [-71.05034602, 42.07077438], [-71.54395735, 42.135813899999995], [-70.99525579, 42.52549665], [-70.96908101, 42.09341212], [-71.32744538, 42.61910672], [-71.06189071, 42.0628335], [-71.41721253, 42.08884269], [-71.20096674, 42.70655718], [-71.14552284, 42.15528465], [-71.08436788, 42.35305923], [-71.16718957, 42.70611037], [-71.33707868, 42.64720459], [-71.00197365, 42.25128984], [-71.04245144, 41.90635325], [-71.08981059999999, 41.8946908], [-71.40071209, 42.29858115], [-71.014093, 42.42723187], [-71.1180434, 42.36416923], [-71.39499166, 42.65598793], [-70.95622903, 42.20530975], [-71.02865286, 42.40494286], [-71.05087924, 42.32164029], [-71.39946403, 42.32463788], [-71.13496357, 42.20504454], [-71.0251767, 42.38800806], [-71.03403829999999, 42.24545235], [-71.23406061, 42.40219134], [-71.31317831, 42.64538706], [-71.40319781, 42.45694215], [-71.06480388, 42.33544139], [-70.85875517, 42.50023544], [-70.94667382, 42.5727415], [-71.04512328, 42.01603564], [-71.127709, 42.40984818], [-71.16037236, 42.74529848], [-71.18352829, 42.50144749], [-71.30942164, 42.636982], [-71.32517808, 42.65245174], [-71.22932214, 42.36597602], [-71.23752466, 42.36763355], [-71.46051055, 42.28998936], [-70.62523789, 42.66244429], [-71.46857494, 42.30679659], [-71.06639451, 42.42525958], [-71.16138034, 42.6930766], [-71.50846613, 42.16209464], [-71.09045156, 42.77827662], [-71.40922639, 42.2924196], [-70.99294235, 41.90291149], [-70.76217240000001, 42.10763131], [-71.12999445, 41.94438645], [-71.08465106, 42.592358700000005], [-70.93762228, 42.0803234], [-70.90027894, 42.48526658], [-70.93776438, 42.18274646], [-71.14660377, 42.29247544], [-71.23398804, 42.36969832], [-71.16545528, 42.22130205], [-71.36097203, 42.25189544], [-71.17388186, 42.24832731], [-70.87342849, 42.23805666], [-71.43038551, 42.24690131], [-71.02536673, 42.36073106], [-71.14108077, 42.78442294], [-71.51437309999999, 42.34262303], [-71.09354663, 42.57246753], [-70.99135169, 42.20257784], [-71.18783277, 42.25031712], [-71.14238034, 42.40585778], [-71.08296214, 41.89366711], [-71.07678339, 42.38328545], [-71.25533002, 42.37634925], [-71.25055072, 42.32651373], [-71.2694353, 42.37951336], [-71.0058848, 42.01836895]]

// append the points
let dots = svg
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("r", 6)
  .style("fill", "#ff3859")
  .style("opacity", "0.65");

// reposition dots in d3 overlay when mapbox is interacted
function render() {
  dots
    .attr("cx", function(d) {
      return project(d).x;
    })
    .attr("cy", function(d) {
      return project(d).y;
    });
}

// reposition dots in d3 overlay when mapbox is interacted
map.on("viewreset", render);
map.on("move", render);
map.on("moveend", render);
render(); // Call once to render
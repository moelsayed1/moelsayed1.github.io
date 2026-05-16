'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "40421500e83add97deac2a8369bc40f9",
".git/config": "c6956bc18245d9244002aa9dc71249bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5a45b4b1be48d9c366f56fab97af0e83",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a9c88dd3eefff39a0c12c857043a3218",
".git/logs/refs/heads/main": "ac06664b1c857f45aaa259e8b44f4a5a",
".git/logs/refs/remotes/origin/main": "6a96d1fb41470fdcf51d09d21190bcee",
".git/objects/04/0213a5f90a1c588c7f78c288f4d74bb4141cac": "b275667bcf1764e20b916f77a3e01153",
".git/objects/04/64e8da67d7184f7110f80fd8ff83052e89dc5a": "3eb2912015142e63d3890b1b97ad9d43",
".git/objects/07/3070b2ef5725c5204df92964711c1c43ad2841": "4f3ee41688927973b9cffc3041275e97",
".git/objects/09/6477bd240550adf773f15d0defe8b57b5f2c3a": "b0d4bfa6cb9178808844de8a02d69cf4",
".git/objects/09/78e083e52bedbaa242b64b3fd63549da16d5f6": "6523948eef3e1a1e332abbc2e495b317",
".git/objects/0c/c6b0d82b395fa999c1e49981f9664977127097": "e89f98274cc4aeffaa7f49722365be40",
".git/objects/0d/bb314c997e0da0c81c802e350acc5291ea0a8c": "fb396a12c6aa3f43669797f8a60f6e08",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/10/9763c50e432d77a8b2c584fe153a5cd8bbfe8b": "15c09bb0d7df7a963b47073da53cd004",
".git/objects/13/9db8a5433abfdf0d015cc36489e336df49377f": "248641ab803fef581714beaeb88fac1b",
".git/objects/14/31e30170e164e4746645a5834f4665d8fbd2fa": "fc8e49875e620f89909f559d80e5d860",
".git/objects/14/c42829a2c46ebf15d12eae77d8b7c55c0f44f3": "a065dbf5bae40976eeaed7595a82ca40",
".git/objects/16/4c56814d20217e6dc316cfac4f1bbab7ce707e": "f3bc347da79e5c1996d374a5a1bdb58c",
".git/objects/16/75797d13f233d859b1d2cd7737329eb7070a5d": "067d1a86f22bc60f8531ffff5c46c742",
".git/objects/18/198c3cfb47dde54efbba1e246cc09872af74da": "34f559458d785ebf9806a92f0d60a296",
".git/objects/1b/699784b35627cc01cdd637358f875e5b588a4f": "6173059c19b6c58741da4e17589d5bdb",
".git/objects/1c/72e084ad80e76497d3957ab947bf144f863b46": "0c42acb622f14b137f6f253eba20238b",
".git/objects/1e/99cbe3b06d65d264686fbc7d965501112652e8": "f4cfbbc1c3c2deac24716db0ecd2e364",
".git/objects/1f/e7c1bb5833d24c6889b18500877d3083933d48": "4b80c6b62627994bfc7428c188d79a2e",
".git/objects/20/b2de3bc6486d9aba636910e29f5a32c7cc2bc9": "e86192d1117bf74fb6c7244bf5be9f80",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/23/56d11c06f3b6386415c0197b9df38703c0e87d": "cc41d2ebf233322e20328508d64490b5",
".git/objects/23/76a842e3edb2a56bbc28a8162d513a70ec2dc6": "03d60ad3283265f78881cf0db418e6da",
".git/objects/24/901d254b59968d7cb43f024f4947dde3100797": "de16b0082775a0cd86edf19a24237cbc",
".git/objects/25/8c61583ba91d2ef965f90c6ab3f014a52efc52": "a9a62e2ea262e62181df190e9ccfb5b4",
".git/objects/27/fea4cb48dda005b675539d08fe10f1a9d6023e": "f86319ca180d58eb30519f8a59e34871",
".git/objects/28/123b299626f2a752b5c47cac372b350b06c81a": "11bfbc7e21b7de1c152065ae3524bb1b",
".git/objects/29/6fe228fecd2b174772bdaf5a802fd9e0e521a6": "b8c18139d7d50838ebbc8118cd8be5ae",
".git/objects/2b/28f2bcf4fe3d6cac31bd9d43a9d43ad15f890c": "2995869960ec2c04c338dee26b7f1dd8",
".git/objects/2b/4815f56e4bec0dafb46fe1edafc8b10ac60998": "6472165858eb25e5579c962f845d1a8b",
".git/objects/2b/8706da6323a9de7da2647c6641f2bafd78f528": "8ead1538c95901967777e5fd99d9a072",
".git/objects/2b/d9036ca093f7a610a746bcf035330102f26342": "ceb8cc2497ab8070bd6403bb69101f75",
".git/objects/2e/c9b3c549dc4da8b75b3e5fdbd4b52449811283": "4cdbeb3d67268459d2342d036a5b1322",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/2f/d993baf8194a52c9c0211adefc7aec39102dee": "9b483748b1eacea7ecd20e4b4981158e",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/32/50e783cb5d12cde1644cac32b33f24d6f04114": "2a0ed57ab261464897114b2ededf08f0",
".git/objects/32/75cd79cecea730b0a229be7fed5644bb4b24fa": "757170c23e95c79f225326134da46dfc",
".git/objects/36/7efd33884fac7805683e2f88a67b7ae1331879": "0497e3c3d60cc3f49acd43327e2170c0",
".git/objects/36/85c6d9e529ae825471325dcf79de718bb4eaf5": "814e5f964e31497e2c070953fc201ca2",
".git/objects/39/18369fb646916fccee2dd4229f5a10d871fedb": "417447f9752d3d17f30f4f075d2548bc",
".git/objects/39/353848a5ebbb7c9cb1a7220fc50ec812a028c0": "977bc2405fbc4cbb02ca9046c4afabd8",
".git/objects/3a/fd624e531e53c804f513e0ab3a029ee3ca411b": "ff677b2193fa580ed7ea2d4b4c222f80",
".git/objects/3b/00af3c4065df99b2c215515093efc3434cfebc": "33f81027acb7ed6046fb21f060af453a",
".git/objects/3f/33c9a507c5627affc25feed703bacd7f9264d2": "1c460da4c56c3fb407cedd75d0f67164",
".git/objects/44/96e017e1d30590683940e2a8108a2ff4c85101": "931011f7fa0d6c01a1f596b5ff4b4e85",
".git/objects/45/558f1a881269dce653b5f313c2421684c13d33": "308c92689abf2b3db06105dd80dc1e13",
".git/objects/45/71d22a1750935ce3c0da6559f1a1c375b13520": "cdf49858145d764f76b7399515278f90",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/49/2ab07df16f001cefa80f3b86fc83cd645316a4": "5cfeeb71cd8a3f7da1dbcc885ea9efd9",
".git/objects/4b/3a12942bd09622ea25174fdec498059092f50a": "55786855f9cf4ac452661a6c7e7923d4",
".git/objects/4c/8efb9c8d60fcdb8fd9e2c0139cd752f4b21edb": "fd531f8a7a24d528218a9dccb3656a05",
".git/objects/50/04cf0faa0d1744704e417787db01c9c5a00007": "61d5c2bff571a24cb52d01696df5b73f",
".git/objects/50/5f4d0e44ba80256a386eb0494f86fbb43b4522": "d49226a008ff5587b8e9b6fcc2142ba0",
".git/objects/52/bea5d8b6f903af96142983fb7380442cbbe6de": "477c920aeec9a0f33544f6e91330dc7a",
".git/objects/54/0b3c557928b3d307d9ba9bce16ad196ceb3a4a": "99fa9f7bfee82ae6341f1e62f374af11",
".git/objects/54/434296cd4bfea707312fd6e7dfa080b25f18c3": "786c204f0ef9a66b86d61ae63e1e7258",
".git/objects/54/a4e1e231261b5f71f2ec84642ca6d42118393f": "0580527ffc822ac34c7366e64723ea6e",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/59/8311f8c57f27fc45114c0c747c62339e82dcce": "f4bad361371c54ad792d0e14bc392bc3",
".git/objects/5b/2eaf02df703e79aaa2599089b86cee842b9b7a": "08162fe6212f62fd0cf7aaf8c2ef8e6e",
".git/objects/5e/d89b8990a25c315d8714ae8dfacef91c47f83f": "aaf87391c57fceaba58a7e44461415af",
".git/objects/63/8b903e5da1a495e46e057f2d3fbada0f6f0273": "dfea71016db6ce0afe8807a308989328",
".git/objects/6a/0a2fde5845e57904a3332b489af8181de8bdc0": "e34583609da37729fcd872a9ad816b50",
".git/objects/6b/9de2cf10612b1e4548f644f4783faa8e099515": "f7153f1c58416879e7053c13369853db",
".git/objects/6e/1ee7c87e743e7f7b6a9fa5802e99034124f7d5": "4dba00a6cca3829461908809c0c28137",
".git/objects/6f/727f214f8f76e19da61e7ebb8ac4db78dfa13f": "4788a842703176b919dfff12030374ca",
".git/objects/6f/dd3a75856066a7d2ead1f5f186de3cbc6dffed": "55756897eea0249d825a368cf0c51f04",
".git/objects/70/42df6c80c042615d3978477d9484e5662108a8": "f83e87c39907d748c419c6d4dd224558",
".git/objects/70/91582da37c0902a14b6d3e0dbe79adf3cef95a": "a0d195060aea9a71a1d5ac34ad91f1f0",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/130fff476cafc0603196fd691677d83c60ba6c": "d7e5a1df3730a9ea355417d8fb573274",
".git/objects/75/07e30cb3aba211fe2464bc61b90cde5495c7a9": "1daeaa00950de15900fa9c846033548a",
".git/objects/75/796ac3ace30d2558bb51a779df4081a4e0cabe": "623780ea255fa01d3f792ead56cb1ac2",
".git/objects/76/b88c556821b826aacf5e737b210344e2233b5b": "ad6bc04c89b2b3f385e71114855626b6",
".git/objects/7a/ca60a22d3ee126d201b1a981a367797dda87f0": "487ed1167ae37d80522ec0c13ea23a9a",
".git/objects/7c/df57a0997e1d7163ccc4f239dd3c6060cf0239": "5c03e78d2db7d7917674ec4cd7db6e9d",
".git/objects/7d/cec0ac1cf18b707d17f22733752c85276f9d8b": "ef3c7a1187ac3c59ae2c89b7592c001f",
".git/objects/7e/a5d47608961f9eedb288628a767448986a2a36": "163ab4c8d7b684bd93dbbc7c9d7d4776",
".git/objects/7f/265278921b6eb605511a00407352e6f57cb5d8": "4ceabd73bc8919b998057292071b6d8a",
".git/objects/80/96f0bbb4b12267fe3934c7f06b768eda9f316e": "d1b6766e826e5c9abe7d2ce867bffa96",
".git/objects/81/36efb6fcc9ba801c08ffc04312030afc3fa347": "43e0253aae1e7833ca40fd74420cf5de",
".git/objects/82/3265d876e807ddc9094064489e15999cc0b566": "9fbca4b3b94a9eb90cdcf5812edfd561",
".git/objects/82/7eedbae9e5d10b1e4ca7952c71e7ee29465738": "9938d0cb118fa131f97b46720b992ff7",
".git/objects/84/61d5781739e6a1b072fc77ce2bbea7a5f43ab1": "255f96ae8f0b12c98f2dcbfd3798c4b1",
".git/objects/85/bc147b7626450411368316a39fff8201e47774": "74c6fd4386544a00913c39e17dca7cca",
".git/objects/88/a9e708925699e7f4e7a56314206d04b478eef8": "f2e613807e93a6839a11651dd8b780d1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/6b2f82ab6f93da86816ef4ffe80d489128fe0a": "b4b5efada21a176002900504156ec5fb",
".git/objects/91/7004a36437e1ce8dd22ff27fe60da0623da1e5": "71771364fa66f6ef06000d2352a2f8d3",
".git/objects/92/aca902b4216e2f4863bc92618876fd5461a678": "daa27dcd5fb7411a8cd7e4a7f0ee2aef",
".git/objects/92/e384d10a7ee30a3bba3f52aa89affb04d42092": "18c8b033b898c726db18e5e57f9be3aa",
".git/objects/94/75b9a96a68345f0a5acbbffd9d13e4f4dd52e0": "30d81bdd346e7a7f061ac93955d8ab95",
".git/objects/94/b2d1a7e415184484242cb4b6357a92297e1479": "c15475890a63c707536ab5bb7d9955aa",
".git/objects/96/823fccc250cc94de876520a47f86509c5c901f": "f7934d11dfb8c9eb660d4f0fcdf9d211",
".git/objects/97/033584c448c7a297c6764d948c079a522f581b": "f49f6092bde207d11f5dac226870b163",
".git/objects/98/746fcdbf11a5cd85d9aeb86d75a7755caf2f3d": "977e5bbe67ccab2a623c8891bc569e24",
".git/objects/9a/490de774ce9d961c4067fb375ec08f39ef4075": "0b39b8c1d1c13fd3a5a887eb9882b188",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/6b44f8087f4f52a147db10ac776887b02b27ed": "a41272c6f0dac0cb1462c2261fac6001",
".git/objects/9f/d26458922621338bbf3981c590660694f6ca68": "49823f14294cfc4adc748774c6c97b09",
".git/objects/9f/ea44913867c3cb04a617dab75f713bf28b1af3": "dc6dcb9f404a93a76ab488519202280a",
".git/objects/a1/3970353b74eb13cf4103af5bac4197886d245f": "196366c598aeef2530e6a6bbe692d69a",
".git/objects/a1/bf211d1c3b8f0bfb65c1d28939f01ba5a518e0": "8bae3f8f02be0ca4ed1291d67c2d1805",
".git/objects/a4/8618fc90b6fc77eae55717741105a909a9d4e9": "31ccbd6c2a048b7c990604ebd455ad5a",
".git/objects/a6/b4dc56f40b9d1a49b515f112f0c66548c65a65": "195ea63e76a8831d86850f604201b126",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/aa/5b8982cf323846c3eca66f1174c5f910788577": "68684c320e8e6ab3b20343909cdb1278",
".git/objects/ab/13cfa08abebe34681791bba62fdc8c5a183c02": "78160c251434135f0d842d8274b8dea1",
".git/objects/af/c5ebd80a68fe01e2af308bdef02670ddd3bb2a": "2bdfcdb7c40b084a2272ea757f3f277a",
".git/objects/af/cae4ca4ef223a1a25e82e370654455f5a1c614": "d920779108e0edbeffa8d8a2fd4b7688",
".git/objects/af/fb17f5bfdc2799532e6f0ce588e4914719c611": "0899b1b1dfef39f32ebd745d2794113c",
".git/objects/b3/f2de220f78269ebc5c4d0caa91f117c07128e9": "4454a425e9b7f40657ee949c591deca8",
".git/objects/b4/bc53133600a953d033f5decfa0866636301e87": "11d47e3abb92c62ce0ff248b9ee8dd11",
".git/objects/b4/cbfe1bd9190fe91525fb316549d0ac9a938860": "df889df2b5bdae09019bf52a3c33751c",
".git/objects/b6/734c3d00d5a5266cf68eb807ce97506bf66f0f": "41b1755e355cb409cd91f2c2fde8f01f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/f538b68e7c296cbc7165e1a4df204c79442e05": "a4255c047c5a64b10341c23584c73b51",
".git/objects/bd/f7dc052e05fa381b9c5228969b7ab5e8d59a4d": "a89fe3c418457fcd0875fe8467745e39",
".git/objects/bf/b041784a9665cb7d832716ede505f5b86b4aec": "4004784b128ff8b8b716536d01089176",
".git/objects/bf/f0a633879848cd16bfe803484f78dd077ac543": "c6874135d1944584b7a54ac96acf4e51",
".git/objects/c2/61324c810d5fffe3c6bb39d680f98b8d4e6093": "fea474287df96d0bc06d51c55a061664",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/c3/e5fedf3ed99dd936679e8b005172485024e5e5": "ffef8df114d12b127081e9febbc06b81",
".git/objects/c5/4e892f8ef733d0f9c427c2472deb7173af5d7d": "ef56c130bf6c55b26e8a81af30d62be7",
".git/objects/c6/936e14189e83a4b119b5170a1eb3d780df23c4": "1eedd1fea50e9840038a020e9aa3fd25",
".git/objects/c8/493a125c17d0b47c066332478f5d9c97ccc66c": "d7dc167b5e44c8c842eca31c9b50422e",
".git/objects/ce/05279a86e75e5bb12948c9d747394aefb0462c": "9cd8b264fb532c78836246111dbfc0e8",
".git/objects/cf/4819f21a12124fc848ec0ce459e238bae07a41": "e15f340f1a231ede46195d28d042e10f",
".git/objects/d0/f7decffe7455497b4e201a596cc0b10eea3ced": "5b228ec9505854b9a0c19916ed53ca92",
".git/objects/d2/dcdf2693b8350460697a7b3e1f4b0dc7d3f984": "050e8d640cdb72b94b28a914fcb36fa4",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d3/e93e316c4f775297a1826ca119acd6da3665d7": "1ae5eb30ba9597cfe21dcbf14c02ccd4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/aba09d267d7fc0f6c7402e2940a4828747a03e": "64ac4eae9bf5c1f6315dac590634851b",
".git/objects/d9/b37ffad10549e8c49e7be36f3fa24fe5f86d51": "edeed036ecf96186b66304bc607872e7",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/444a6ac61e9c7acfbb1209f2bc1105351c3eec": "3f706ee84238cec3eec67ed696e5f477",
".git/objects/de/1665ad456691d0abc76190dc0bdbde2b9bd3d1": "b98f84e6d7e38c570630ecb9d694cf09",
".git/objects/e2/a4588ffa0964b79ebd7444d746527608a93499": "81b696af1b53af7e11be20972898f3bb",
".git/objects/e3/ec95c1290c1fcaa65fc4e2131f5a5b6d7cffcd": "94c2c26a29c1e4ff293cb9915ba77535",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/e6/3482160ba183093b806adc36457fde9cc40041": "08b88b4a0c6385dc2f212a321dc41562",
".git/objects/e6/ebdbf1974a50760bc0937f393392fe4250170b": "fe62abf110a225655e6a925a25320705",
".git/objects/e7/b07517901a1915a022d6bd7ce4eb8e61990665": "c18c9e1b1183d4adf54f8a4da9fa632a",
".git/objects/e8/b6b4bc1fea510ddc6badc85cbbc6c497ee0538": "bb16b7c72e68624a86528583de0d3d92",
".git/objects/e8/d98d154b778b0bb6d21bb073c6fe5ea510d717": "d6c7b2eaa09216687f7acb96c3c94ccf",
".git/objects/e9/5d06b05647225d6fa2309857e478db12dcdb05": "d20cc61c166263399dc0395c421b2509",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/100f6ae042b8b3c7098d2b624ae8e10a7dab9b": "5aff4283aa2f9ca850dee600bdd0ab9f",
".git/objects/ec/5015a17a272500790c0d3d293f51d36673da27": "801ace6b3c84513b5f6505b1598bad56",
".git/objects/ec/ef07659d68a2541a7a83fd2446c312a9b86fe6": "92feafb2636173c1c196955b7b78c6f8",
".git/objects/ee/47747c866ba73f877e87cdcddeee39035eac6e": "c4eeeb9fb66543fedb53ce47480a80ef",
".git/objects/ef/f8c6ba23fa9461c1e1eb1a34735fc0b6ee07da": "fa41a9313816af211b5c725149cb4c60",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/634b5ca7bb9cd6df019a932cbbd4740829b825": "22e81eb1efbfb3b600f7d92c75331760",
".git/objects/f4/d5889ed2c51db62f93bc0f9622ef1cfbe78884": "e9ee7f37231572c7f9e9c5eeae6c91d1",
".git/objects/f4/ff84c42973d93b810f189118d10fe4bba2e0ad": "9f8374be78c1c37f57c8828241a225bb",
".git/objects/fb/0b996ddb51254bf7fc539653b27690cb4aee82": "5ce903b47e6a3e0b94c63b87954dbeef",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/fc/8258ff28887f407fd591570dfcbaeba5e1e081": "4a98f0cf636de4e292acc89e5480738a",
".git/objects/fc/ebbd21c1bce2e354a736875fd03c2a773eecd2": "eea3fa61188b40811256f21802627fb0",
".git/objects/fd/0edf011b87bded9c98a1487e319fd8cde11d1f": "cd9b3a477b9eb26d00b8ae137f2ee10d",
".git/objects/fd/1312211cbafad6980ed61792097d00fe6233a3": "8c6371bf1cf8798dfad780e08853e204",
".git/objects/fd/3296917211b56240ca9d58d20762b600934812": "b21b798333e6afe2a95bc83b573557e4",
".git/refs/heads/main": "7bcb1f5997c518ef668d9fc3fed58db9",
".git/refs/remotes/origin/main": "7bcb1f5997c518ef668d9fc3fed58db9",
"assets/AssetManifest.bin": "2dbb8744e3fdfb969d36433d74084336",
"assets/AssetManifest.bin.json": "a847ece737d0d797029aea1227b7ced0",
"assets/AssetManifest.json": "761b1e06230cd2f1b0f83dbfe3938331",
"assets/assets/images/added_successfuly_khedr.jpeg": "1d74d00e5cce380388009daae73ea268",
"assets/assets/images/Add_to_cart_khedr.jpeg": "9e4bf071e20a7cc87b8c1dcf0f1b108e",
"assets/assets/images/add_to_khedr_screen2.jpeg": "258d0c767d85fc76e1043ed17c64d840",
"assets/assets/images/anime.jpg": "7a68c177fedd21f16e05dc4de7731527",
"assets/assets/images/appointments_sun.png": "cda3c2eb242643617b0173a17b970516",
"assets/assets/images/appointments_sun2.png": "31b51aaf2eee9cc8718560a6a3159b02",
"assets/assets/images/Attandence%2520History.jpg": "ae5b30905ab19ca9f3f8380ef243ddee",
"assets/assets/images/batman.jpeg": "982b2e8b35c837b1a2be1c170f98fa52",
"assets/assets/images/bawq.png": "f15cfe54a30ebcea614e06145942c4b1",
"assets/assets/images/bawq2.png": "8c6e1f620a850933b64379947f7ee1b6",
"assets/assets/images/camera.jpg": "13c4aef1f32e97f9de57a3436fd493f0",
"assets/assets/images/categories_khedr.jpeg": "c028b9b88470cfe69f9cec4d5fd2184d",
"assets/assets/images/Challenges_choose_sun.png": "77ef463aaac7178b7061c7edd14bd97c",
"assets/assets/images/Checkout_sun.png": "ce49ee44215cba02553299af2e49dd1a",
"assets/assets/images/collect_k.jpeg": "884ab63084b2f89327add425cfded62e",
"assets/assets/images/collect_k_done.jpeg": "f439e1127bdc3c7ccf58375c709a48c8",
"assets/assets/images/contact_us_khedr.jpeg": "4315c9d07411093621391b8c211c9ff8",
"assets/assets/images/Dashboard.jpg": "1e8a711211cd37f16863a3f36c481845",
"assets/assets/images/Doctors_sun.png": "2ce602b002eebe31a53c0b43c408f7cb",
"assets/assets/images/Doctor_book_sun.png": "10a527542658a3a0a4052f373e18f853",
"assets/assets/images/Doctor_review_sun.png": "ea7ddb0583f97c1be74ad2b314b1e8f9",
"assets/assets/images/done_k.jpeg": "9eb890de534bc51e2a2fdb02b62cf7ce",
"assets/assets/images/exercise1.png": "a02796d14860ad6e85f1882a11fe587e",
"assets/assets/images/exercise_aveng.png": "459157d982200d75969a89d415c0882b",
"assets/assets/images/exercise_details.png": "9d7412905d1befc38320f612ff8b5d43",
"assets/assets/images/exercise_fit.png": "b792f756e87e38e641c2dfd6a6a78ae9",
"assets/assets/images/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/images/forget_password_khedr.jpeg": "461b497ae7b6bb96048092d716d37751",
"assets/assets/images/home_aveng.png": "fbf01df03d9fc502415baab9bad66867",
"assets/assets/images/home_fit.jpeg": "e93eb9138413bc910f59bfd5541f6513",
"assets/assets/images/home_fit.png": "2561f7db626e6e1d4c2000d573c0a8d4",
"assets/assets/images/home_k.jpeg": "1fe5653cb728f62635de32d4c44a3b6a",
"assets/assets/images/home_screen_khedr.jpeg": "f67cb34b02d1619d94f3204ed2f9399b",
"assets/assets/images/home_screen_khedr2.jpeg": "2bcbbe69a76e7f3a25b4878723fa2ee8",
"assets/assets/images/home_start2.png": "6e67e477b4d137177903b51cf11612fd",
"assets/assets/images/home_start_fit%2520(2).png": "686bf6308beef051625ad2ee6713221e",
"assets/assets/images/Home_start_fit.png": "9428093b67722e5782ab4da52bbb2d6c",
"assets/assets/images/Home_sun.png": "8af4ee167082915d904de049f1e0a46e",
"assets/assets/images/icon_bg.png": "2a387023dac2a7e3710366aaf3a4bf6d",
"assets/assets/images/instagram.png": "8ce47fd872187bfa8d11505b3bd8944e",
"assets/assets/images/joker.jpeg": "49571c814a8bf367ab0fb0683456caea",
"assets/assets/images/Khedr_market_cover.png": "46ba1f787dff9422f59b0b20a1e9b7fd",
"assets/assets/images/khedr_splash.jpg": "d065d6730ed5b774912388ddd65cd498",
"assets/assets/images/killua.png": "7e8303b89035bc64f8bade8234295e67",
"assets/assets/images/kilua.jpg": "98864f12a23038ede4f87c65dff92d9c",
"assets/assets/images/landing_k.jpeg": "c2376dd8bb23db439a9048682be06beb",
"assets/assets/images/leave.jpg": "6072068650fdb7dca56c800aa4fc532f",
"assets/assets/images/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/images/login.jpeg": "fe734dee14ecc4c23b4df69b24888c1c",
"assets/assets/images/login_aveng.png": "6c7743386d9ada2cb640df100c2b424a",
"assets/assets/images/login_fit.png": "2c427fd38000c0fdf5dc109bc2a44e89",
"assets/assets/images/login_k.jpeg": "22689ea1c9da53cbdfaf45e17d06a58d",
"assets/assets/images/login_khedr.jpeg": "f98babb82b41ca6122fe2f1a6123b956",
"assets/assets/images/login_sun.png": "adf7d483e959feae79dfa61d55d2d53e",
"assets/assets/images/logoPng.jpg": "5d443beeab9c36971755847a89c1ac09",
"assets/assets/images/logout_k.jpeg": "6059708bb305ce3f9d5689b9fa6397c8",
"assets/assets/images/meals.png": "e85ff5d9161842d15a7b33447cacbde9",
"assets/assets/images/meals2.png": "aa59389657a8b8a2d1b2227c2b365316",
"assets/assets/images/meals_aveng.png": "3747cde55faef3eeace2bcfa5c4cd110",
"assets/assets/images/meals_aveng2.png": "3ae50590189ccd4bed30dea49180ad7b",
"assets/assets/images/mobile.png": "18e64e2a8e51d85a34e9d6d4b1e7de11",
"assets/assets/images/my_image.png": "09e26888f8967457d8c05e3d863c907b",
"assets/assets/images/my_image_bg.png": "0962a85e310974f7b037a2381216345c",
"assets/assets/images/my_transaction_khedr.jpeg": "176d96a0a5d028a7dcde424bde666063",
"assets/assets/images/name_logo.png": "36030df6832991c724793c0f1a9e0014",
"assets/assets/images/Nassar.jpg": "92886b7b213bd472c4eb3357f3e2993b",
"assets/assets/images/Notifications_aveng.png": "20a85a5abf1a38003c8f4c3856334d4f",
"assets/assets/images/notifications_sun.png": "683362498698ea14b9238c0aeb75e642",
"assets/assets/images/notification_khedr.jpeg": "33a9c3fe3ed1c18bf2a790da56f1788f",
"assets/assets/images/onboarding_sun.png": "dc38aae9167e14f0d72be79a486f68f2",
"assets/assets/images/on_boarding_aveng.png": "dea11b0c9e3f7879ee4e49b04ee3886e",
"assets/assets/images/on_boarding_fit.png": "9f3760f192a26ecc92a4f850cc3064e7",
"assets/assets/images/on_boarding_fit2.png": "c849713ba79c6dc3610879ce258e08c8",
"assets/assets/images/orders_k.jpeg": "0b4a2068b8444c4faafc97522c43b41f",
"assets/assets/images/orders_khedr.jpeg": "dc1c5435fabcfb1084ccaa474af1662e",
"assets/assets/images/order_khedr.jpeg": "68e4fd7f7c8addc5741c43db620a76a7",
"assets/assets/images/order_place_khedr2.jpeg": "e47893918faaf94ba66a8f52a1d35edc",
"assets/assets/images/order_screen_khedr.jpeg": "966b518344258ba24960ff394bd63e8a",
"assets/assets/images/Pay_aveng.png": "14d044b536b1b3613f17b94a282b9b16",
"assets/assets/images/pay_done_k.jpeg": "7488af193cb12261859614fbe20471e3",
"assets/assets/images/pay_k1.jpeg": "e0ac247dbbdfb2f2cfbb2c8c2dc96c7c",
"assets/assets/images/pay_k2.jpeg": "f159ee96f62caad17162841e3612dd0d",
"assets/assets/images/plan_aveng1.png": "eb4792e3d4cc13c1b15566f5185cc3e0",
"assets/assets/images/plan_aveng2.png": "086b6840c6fde2758da8cb085e8b5784",
"assets/assets/images/plan_aveng3.png": "4b5130225a93abfb6dd3b2e893b6ad25",
"assets/assets/images/plan_fit.png": "01603584c3726144fd25844fc7cfd38b",
"assets/assets/images/Plan_sun.png": "a0c056b1789a400785f168dd43ec6241",
"assets/assets/images/previous_recieved_k.jpeg": "4b68bac5ededcc59406443d3062363ec",
"assets/assets/images/profile.jpg": "9813a03895accf34419970b7d627ce83",
"assets/assets/images/profile_aveng.png": "93322b3047b0c2bc61b77bf69f5d4bc6",
"assets/assets/images/profile_fit.jpeg": "44c58fe5a314c84ec69e081315c86dfd",
"assets/assets/images/profile_fit.png": "22e3e1ba2f75d51265d50103d921a651",
"assets/assets/images/profile_k.jpeg": "c245b9738247c13c07535ed4baf7a31f",
"assets/assets/images/profile_khedr.jpeg": "47b053de46c6483212cdd16b529d2e25",
"assets/assets/images/Profile_sun.png": "d8831ece897b12254d11b8159fae951c",
"assets/assets/images/Q1_aveng.png": "86ac1d7d1bc797418f6a20bc4bddb210",
"assets/assets/images/Q2_aveng.png": "09e315735f2c85e11211c2c5450f8fa9",
"assets/assets/images/Q_fit.png": "e1d5f7940f158d3f48a183468d83700d",
"assets/assets/images/reading.jfif": "40688ef5e2367524b75ddd7d97835d8d",
"assets/assets/images/reading.jpg": "6a4b3b5d79944cfd737615ab71935832",
"assets/assets/images/recieved_k.jpeg": "84f206f7905c9a6670c144e5188290b4",
"assets/assets/images/report_fit.png": "84de86c952116d805e93a3770751145f",
"assets/assets/images/returned_k.jpeg": "ceb321f2ea9436f3437193c141bcef90",
"assets/assets/images/sahseh_android.png": "f611990a8aeddd7c495e28f4452574e9",
"assets/assets/images/Sessions_sun.png": "99e9ee496ce2c66c87288df10ebd00f2",
"assets/assets/images/Settings.jpg": "e9e3ddab1a9bafaa416ddf74d2ac97bb",
"assets/assets/images/Shop_sun.png": "bcfe161f1a5ffdfeebea77ccde081622",
"assets/assets/images/signup_khedr.jpeg": "689c82a94d2d424a48410577f810d5be",
"assets/assets/images/slider_k.jpeg": "624c2df91e0ec40456bd4bea93d86ad2",
"assets/assets/images/splash_aveng.jpg": "dd722f20c6b3ccc2c4a4f78ebebd513d",
"assets/assets/images/Splash_aveng.png": "4c5f69aa4571018ee2bec286dff09fea",
"assets/assets/images/splash_fit.png": "8b1ddae06c71d303bc8557440a9330ad",
"assets/assets/images/Splash_sun.png": "3220064d54c3d25b6155d24499905c84",
"assets/assets/images/Store3.png": "6fd0e3175d43878a0af36d137aaf8523",
"assets/assets/images/Store_aveng.png": "a1f4f38ab99876501ea39557c018c04c",
"assets/assets/images/Store_fit.png": "b86f0ec8caa51aa31321c31fde582022",
"assets/assets/images/today_recieved_k.jpeg": "4fb66e47d69d441baa41737964b0d50f",
"assets/assets/images/transaction2_khedr.jpeg": "a3b83a8fe4f69a00ec2802f5a5f9b637",
"assets/assets/images/transaction_khedr.jpeg": "31e2181a97a55baca4258397cdfedf9c",
"assets/assets/images/workout_aveng.png": "ccc9f645c4b8f0c73ea1a5a50aeb9ec3",
"assets/assets/images/yassir_android.png": "41eeab2bb69526cfbb260a22b2f4b408",
"assets/assets/images/yasuo.png": "9531f59930155500573b3a50cfdbb59b",
"assets/assets/svgs/football.svg": "eb5b04993dafd76cd6263de91478e423",
"assets/assets/svgs/forward_arrow.svg": "291f6a292147a1a0066e385e10475ec9",
"assets/assets/svgs/gym.svg": "8bed2a988ee88ba8dabc09f01dea25a9",
"assets/assets/svgs/logo.svg": "c90058b4a9b04528685516715e0b4e0a",
"assets/assets/svgs/menu_black.svg": "378959d3383859cb84ee895a8694b43a",
"assets/assets/svgs/youtube.svg": "7a44696754509db83fd9e8cae4d62e88",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3ffd96b771428af05dfb442a5046de7c",
"assets/NOTICES": "e01326c03ff2952192dcd820f89685ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c8a61abcd469a595b527f79dd406357b",
"icons/coding.png": "49a53b9141e042468dfc38b8ec38ef6f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "620a9c796e9100ed0a65be4578ad5d77",
"/": "620a9c796e9100ed0a65be4578ad5d77",
"main.dart.js": "caa8d570db3e7758518d44847ce4d2be",
"manifest.json": "865986794e884f776f10ea080ad8621d",
"version.json": "ce923c56888a1f731d2b68b3ab95c19d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

function findSection() {
  const name = document.getElementById("name").value;
  let section;

  switch (name) {
    case "Vince Gio N. Acedillo":
    case "VINCE GIO N. ACEDILLO":
    case "vince gio n. acedillo":
    case "rikako aida":
    case "RIKAKO AIDA":
    case "Rikako Aida":
    case "SHUKA SAITO":
    case "shuka saito":
    case "Shuka Saito":
    case "Romel Bergonia":
    case "ROMEL BERGONIA":
    case "romel bergonia":
    case "JEREMY VALDEZ":
    case "Jeremy Valdez":
    case "jeremy valdez":
      section = "Comprog 11-A";
      break;
    case "KARIM BENZEMA":
    case "karim benzema":
    case "Karim Benzema":
    case "sergio ramos":
    case "Sergio Ramos":
    case "SERGIO RAMOS":
    case "zinedine zidane":
    case "zinedine zidane":
    case "ZINEDINE ZIDANE":
    case "Vinicius Junior":
    case "vinicius junior":
    case "VINICIUS JUNIOR":
    case "LUKA MODRIC":
    case "luka modric":
    case "Luka Modric":
      section = "Comprog 11-B";
      break;
    case "WILT CHAMBERLAIN":
    case "wilt chamberlain":
    case "Wilt Chamberlain":
    case "Rick Barry":
    case "rick barry":
    case "RICK BARRY":
    case "STEPHEN CURRY":
    case "stephen curry":
    case "Stephen Curry":
    case "Draymond Green":
    case "draymond green":
    case "DRAYMOND GREEN":
    case "KLAY THOMPSON":
    case "klay thompson":
    case "Klay Thompson":
      section = "GAS A";
      break;
    case "Kanan Matsuura":
    case "kanan matsuura":
    case "KANAN MATSUURA":
    case "Dia Kurosawa":
    case "dia kurosawa":
    case "DIA KUROSAWA":
    case "You Watanabe":
    case "you watanabe":
    case "YOU WATANABE":
    case "Riko Sakurauchi":
    case "riko sakurauchi":
    case "RIKO SAKURAUCHI":
    case "Chika Takami":
    case "chika takami":
    case "CHIKA TAKAMI":
      section = "GAS B";
      break;
    case "Fumio Kishida":
    case "fumio kishida":
    case "FUMIO KISHIDA":
    case "Joe Biden":
    case "joe biden":
    case "JOE BIDEN":
    case "Emmanuel Macron":
    case "emmanuel macron":
    case "EMMANUEL MACRON":
    case "Olaf Scholz":
    case "olaf scholz":
    case "OLAF SCHOLZ":
    case "Rishi Sunak":
    case "rishi sunak":
    case "RISHI SUNAK":
      section = "HUMMSS A";
      break;
    case "Katsuragi Asuka":
    case "katsuragi asuka":
    case "KATSURAGI ASUKA":
    case "HOSHIZORA MITSUHIRO":
    case "hoshizora mitsuhiro":
    case "Hoshizora Mitsuhiro":
    case "AMAMIYA TSUBASA":
    case "amamiya tsubasa":
    case "Amamiya Tsubasa":
    case "KASHINO YUMENO":
    case "kashino yumeno":
    case "Kashino Yumeno":
    case "NAYUKI ARATA":
    case "nayuki arata":
    case "Nayuki Arata":
      section = "HUMMSS B";
      break;
    case "AKIRA YAMAMOTO":
    case "akira yamamoto":
    case "Akira Yamamoto":
    case "HARUKI WATANABE":
    case "haruki watanabe":
    case "Haruki Watanabe":
    case "JOSE GARCIA":
    case "jose garcia":
    case "Jose Garcia":
    case "RENATO AGUILAR":
    case "renato aguilar":
    case "Renato Aguilar":
    case "NIKITA ANATOLYEVICH SOKOLOV":
    case "nikita anatolyevich sokolov":
    case "Nikita Anatolyevich Sokolov":
      section = "HUMMSS C";
      break;
    case "LIONEL MESSI":
    case "lionel messi":
    case "Lionel Messi":
    case "WAYNE ROONEY":
    case "wayne rooney":
    case "Wayne Rooney":
    case "KYLIAN MBAPPE":
    case "kylian mbappe":
    case "Kylian Mbappe":
    case "ROBERT LEWANDOWSKI":
    case "robert lewandowski":
    case "Robert Lewandowski":
    case "NEYMAR":
    case "neymar":
    case "Neymar":
      section = "BNP A";
      break;
    case "ANDRES INIESTA":
    case "andres iniesta":
    case "Andres Iniesta":
    case "CARLO ANCELOTTI":
    case "carlo ancelotti":
    case "Carlo Ancelotti":
    case "LARRY BIRD":
    case "larry bird":
    case "Larry Bird":
    case "BILL RUSSELL":
    case "bill russell":
    case "Bill Russell":
    case "KAREEM ABDUL-JABBAR":
    case "kareem abdul-jabbar":
    case "Kareem Abdul-Jabbar":
      section = "BNP B";
      break;
    case "MICHAEL JORDAN":
    case "michael jordan":
    case "Michael Jordan":
    case "SHAQUILLE O'NEAL":
    case "shaquille o'neal":
    case "Shaquille O'Neal":
    case "SCOTTIE PIPPEN":
    case "scottie pippen":
    case "Scottie Pippen":
    case "CHARLES BARKLEY":
    case "charles barkley":
    case "Charles Barkley":
    case "KOBE BRYANT":
    case "kobe bryant":
    case "Kobe Bryant":
      section = "ANIMATION A";
      break;
    default:
      section = "Not Enrolled";
      break;
  }

  if (section === "Unknown") {
    document.getElementById(
      "result"
    ).innerHTML = `<span class="unknown">Name: ${name}, Section: ${section}</span>`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Name: ${name}, Section: ${section}`;
  }

  alert(`Your section is...`);
}

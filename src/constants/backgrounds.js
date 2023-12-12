import bgMob from "../images/background/mobile/bg_homescreen@1x.png";
import bgMobRetina from "../images/background/mobile/bg_homescreen@2x.png";
import bgTab from "../images/background/tablet/bg_mainpage@1x.png";
import bgTabRetina from "../images/background/tablet/bg_mainpage@2x.png";
import bgDesk from "../images/background/desktop/bg_mainpage@1x.png";
import bgDeskRetina from "../images/background/desktop/bg_mainpage@2x.png";

// HOME PAGE MOBILE
import bgBottleHome from "../images/background/mobile/bottle_homepage@1x.png";
import bgBottleHomeRetina from "../images/background/mobile/bottle_homepage@2x.png";

// HOME PAGE TABLET
import bgBottleTabHome from "../images/background/tablet/bottle_homepage@1x.png";
import bgBottleTabHomeRetina from "../images/background/tablet/bottle_homepage@2x.png";

// HOME PAGE DESKTOP
import bgDeskBottle from "../images/background/desktop/bottle_home@1x.png";
import bgDeskBottleRetina from "../images/background/desktop/bottle_home@2x.png";

// WELCOME PAGE MOBILE
import bottleWelcome from "../images/background/mobile/bg_mainpage_bottle@1x.png";
import bottleWelcomeRetina from "../images/background/mobile/bg_mainpage_bottle@2x.png";

// WELCOME PAGE TABLET
import bottleTabWelcome from "../images/background/tablet/bg_mainpage_bottle@1x.png";
import bottleTabWelcomeRetina from "../images/background/tablet/bg_mainpage_bottle@2x.png";

// WELCOME PAGE DESKTOP
import bottleWelcomeDesk from "../images/background/desktop/bg_mainpagebottle@1x.png";
import bottleWelcomeDeskRetina from "../images/background/desktop/bg_mainpagebottle@2x.png";

export const backgrounds = {
  sm: {
    bg: bgMob,
    bgRetina: bgMobRetina,
  },
  md: {
    bg: bgTab,
    bgRetina: bgTabRetina,
  },
  xl: {
    bg: bgDesk,
    bgRetina: bgDeskRetina,
  },
  home: {
    sm: {
      bottle: bgBottleHome,
      bottleRetina: bgBottleHomeRetina,
    },
    md: {
      bottle: bgBottleTabHome,
      bottleRetina: bgBottleTabHomeRetina,
    },
    xl: {
      bottle: bgDeskBottle,
      bottleRetina: bgDeskBottleRetina,
    },
  },
  welcome: {
    sm: {
      bottle: bottleWelcome,
      bottleRetina: bottleWelcomeRetina,
    },
    md: {
      bottle: bottleTabWelcome,
      bottleRetina: bottleTabWelcomeRetina,
    },
    xl: {
      bottle: bottleWelcomeDesk,
      bottleRetina: bottleWelcomeDeskRetina,
    },
  },
};

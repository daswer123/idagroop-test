<template>
    <header :class="style.header">
        <div :class="style.headerInn">
            <HeaderLogo/>
        </div>
        <div :class="style.headerInn">
            <HeaderMode/>
            <HeaderNotify/>
            <HeaderProfile/>
        </div>
    </header>
</template>

<script>
import style from "../assets/styles/components/header.scss?module";
import HeaderLogo from "./header/headerLogo";
import HeaderMode from "./header/headerMode";
import HeaderNotify from "./header/headerNotify";
import HeaderProfile from "./header/headerProfile";

export default {
  computed : {
    style(){
      return style
    }
  },
  components : {
    HeaderLogo,
    HeaderMode,
    HeaderNotify,
    HeaderProfile,
  }
}

</script>
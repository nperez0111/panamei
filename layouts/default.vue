<template>
  <v-app>
    <v-toolbar fixed app extended color="primary" dark>
      <v-toolbar-title slot="extension" class="white--text">Panamei Seafood Selector</v-toolbar-title>
      <v-btn @click="clear" ripple color="red">Clear Selected</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="dialog=true">
        <v-icon>arrow_forward</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-layout row justify-space-between wrap class="mt-3">
        <v-flex v-for="(item,i) in items" :key="item.image" xs6 md3 d-flex class="my-1 px-1">
          <v-card ripple @click.native.stop="addQuantity(i)" tile>
            <v-card-media :src="item.image" height="150" contain></v-card-media>
            <v-card-title v-text="item.title" class="title"></v-card-title>
            <v-card-actions>
              <v-btn icon ripple @click.stop="subtractQuantity(i)">
                <v-icon color="red">remove_circle</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <h3 v-html="list[i].quantity"></h3>
              <v-spacer></v-spacer>
              <v-btn icon ripple @click.stop="addQuantity(i)">
                <v-icon>add_circle</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" scrollable>
        <v-card class="modal">
          <v-toolbar dark color="primary darken-4">
            <v-btn icon @click="dialog=false" dark>
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Output</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab dark flat @click="clear(true)" class="pr-1">
              Redo
              <v-icon right>refresh</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-alert type="error" :value="selectedItems.length===0">
              Nothing Is Selected Press "Redo" or the "X" to go back.
            </v-alert>
            <v-layout justify-center v-show="selectedItems.length>0" class="mt-2 mb-5">
              <v-btn @click="copy">Copy to Clipboard</v-btn>
            </v-layout>
            <v-layout wrap v-show="selectedItems.length>0">
              <template v-for="item in selectedItems">
                <v-flex xs9 :key="item.title">
                  <h2>{{item.title}}</h2>
                </v-flex>
                <v-flex xs3 :key="item.image">
                  <h3 class="text-xs-center"> X {{item.quantity}}</h3>
                </v-flex>
              </template>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-content>
  </v-app>
</template>
<script>
const listGen = (length) => (new Array(length)).fill(false).map((c, index) => ({
  index,
  quantity: 0
}))
export default {
  data() {
    const titles = [
        'Tilapia Fillets 1lb',
        'Tilapia Fillets 2lb',
        'Tilapia Fillets 4lb',
        'Swai Fillets 1lb',
        'Swai Fillets 2lb',
        'Salted Pollock Fillets 7oz',
        'Salted Pollock Fillets 12oz',
        'Cooked Shrimp 31-40 12oz',
        'Cooked Shrimp 31-40 1lb',
        'Cooked Shrimp 31-40 2lb',
        'Cooked Shrimp 26-30 2lb',
        'Cooked Shrimp 90-110 1lb',
        'Uncooked Shrimp Tail ON 31-40 12oz',
        'Uncooked Shrimp Tail ON 31-40 1lb',
        'Uncooked Shrimp Tail ON 31-40 2lb',
        'Uncooked Shrimp Tail Off 51-60 2lb',
        'Uncooked Shrimp Tail ON 13-15 2lb',
        'Seafood Mix',
        'Squid Rings',
        'Surimi Flakes',
        'Surimi Sticks',
        'Breaded Calamari',
        'Butterfly Shrimp',
        'Grouper Fillets',
        'Mahi Mahi Portions',
        'Snapper Portions',
        'Whole Tilapia',
        'Atlantic Salmon Portions',
        'Catfish Nuggets',
        'Chum Salmon Portions',
        'Cod Fillets',
        'Flounder Fillets',
        'Grouper Fillets',
        'Mahi Mahi Portions',
        'Ocean Perch Fillets',
        'Pollock Fillets',
        'Silverside',
        'Smoked Salmon',
        'Smoked Salmon Fillet',
        'Tilapia Fillets',
        'Tuna Portions',
        'Wahoo Steaks',
        'Whiting Fillets',
        'Whiting Hgt',
        'Whole Snapper',
        'Cocktail Shrimp',
        'Black Mussels',
        'Black Mussels',
        'Clams',
        'Conch Meat',
        'Conch Meat',
        'Crab',
        'Crab Claw Meat',
        'Crab Claw Meat Can Twin Pack',
        'Crawfish',
        'Greenshell Mussels',
        'Jonah Crab Claws',
        'Lobster Meat',
        'Scallops',
        'Baby Octopus',
        'Calamari Tubes',
        'Calamari Tubes & Tentacles',
        'Cooked Squid',
        'Octopus',
        'Seafood Medley',
        'Coconut Shrimp'
      ],
      list = listGen(titles.length)
    return {
      dialog: false,
      list,
      titles,
      images: ["https://www.panamei.com/wp-content/uploads/2017/02/tilapia-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/tilapia-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/tilapia-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/swai-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/swai-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/salted-pollock-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/salted-pollock-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/CPTO-31-40-12oz-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/CPTO-31-40-12oz-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/CPTO-31-40-12oz-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/CPTOFF-26-30-2lb-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/CPUD-90-110-1lb-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/RAW-EZ-PEEL-31-40-12oz-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/RAW-EZ-PEEL-31-40-12oz-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/RAW-EZ-PEEL-31-40-12oz-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/PDTOFF-51-60-2lb-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/PDTO-13-15-2lb-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_mix_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_squid_rings_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_surimi__flakes_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_surimi_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_breaded_calamari_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_breaded_shrimp_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_select_grouper_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_select_mahi_mahi-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_select_snapper5-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_select_whole_tilapia_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/atlantic-salmon-portions-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/catfish-nuggets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/chum-salmon-portions-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/cod-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/flounder-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/grouper-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/mahi-mahi-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/ocean-perch-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/pollock-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/silverside-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/smoked-salmon-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/smoked-salmon-3lb-1-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_select_tilapia_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/tuna-portions-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/wahoo-steaks-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/whitting-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/whitting-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/snapper-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_shrimp_cocktail_900_975_2-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/black-chilean-mussels-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/MUSSELS-WHOLE-CHILE-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/clams-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/conch-meat-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/conch-meat-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/blue-crab-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/crab_meat-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/CRAB-CLAW-MEAT-2pack-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/crawfish-2lb-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/greenshell-mussels-2lb-2-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/johah-crab-claws-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/lobster-meat-1lb-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_shellfish_scallops_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_baby_octopus_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/calamari-tubes.png", "https://www.panamei.com/wp-content/uploads/2017/02/Calamari-tubes-tentacles.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_squid_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_octopus_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/Seafood-medley-3lb-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_breaded_coconut_shrimp_900_975-646x700.png"]
    }
  }, computed: {
    items() {
      return this.images.map((image, i) => ({
        image,
        title: this.titles[i]
      }))
    },
    selectedItems() {
      const titles = this.titles,
        images = this.images
      return this.list.filter(({
        quantity
      }) => quantity !== 0).map(({
        index,
        quantity
      }) => ({
        index,
        quantity,
        title: titles[index],
        image: images[index]
      }))
    },
    toCopy() {
      return this.selectedItems.reduce((str, {
        title,
        quantity
      }) => str + `${title} X ${quantity},` + "\n", "")

    }
  }, methods: {
    setQuantity(index, amnt) {
      this.$set(this.list[index], 'quantity', amnt)
    },
    addQuantity(index) {
      this.setQuantity(index, this.list[index].quantity + 1)
    },
    subtractQuantity(index) {
      const amnt = this.list[index].quantity
      if (amnt > 0) {
        this.setQuantity(index, amnt - 1)
      }
    },
    clear(closeDialog) {
      if (closeDialog) {
        this.dialog = false
      }
      this.$set(this.list, listGen(this.titles.length))
    },
    copy() {
      const text = this.toCopy
      if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

      } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
          return document.execCommand("copy"); // Security exception may be thrown by some browsers.
        } catch (ex) {
          console.warn("Copy to clipboard failed.", ex);
          return false;
        } finally {
          document.body.removeChild(textarea);
        }
      }
    }
  }
}
</script>

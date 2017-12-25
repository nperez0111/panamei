<template>
  <v-layout row justify-space-between align-center wrap>
    <v-card>{{list}}</v-card>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      list: (new Array(61)).fill(false).map((c, index) => ({
        index,
        quantity: 0
      })),
      titles: ["GROUPER FILLETS", "MAHI MAHI PORTIONS", "SNAPPER PORTIONS", "TILAPIA FILLETS", "WHOLE TILAPIA", "ATLANTIC SALMON PORTIONS", "CATFISH NUGGETS", "CHUM SALMON PORTIONS", "COD FILLETS", "FLOUNDER FILLETS", "GROUPER FILLETS", "MAHI MAHI PORTIONS", "OCEAN PERCH FILLETS", "POLLOCK FILLETS", "SALTED POLLOCK FILLETS", "SILVERSIDE", "SMOKED SALMON", "SMOKED SALMON FILLET", "SWAI FILLETS", "TILAPIA FILLETS", "TUNA PORTIONS", "WAHOO STEAKS", "WHITING FILLETS", "WHITING HGT", "WHOLE SNAPPER", "WHOLE SNAPPER", "COCKTAIL SHRIMP", "COOKED SHRIMP – CPTO", "COOKED SHRIMP – CPTOFF", "COOKED SHRIMP – CPUD", "UNCOOKED SHRIMP – EZ-PEEL", "UNCOOKED SHRIMP – PDT – OFF", "UNCOOKED SHRIMP – PDT-ON", "BLACK MUSSELS", "BLACK MUSSELS", "CLAMS", "CONCH MEAT", "CONCH MEAT", "CRAB", "CRAB CLAW MEAT", "CRAB CLAW MEAT CAN TWIN PACK", "CRAWFISH", "GREENSHELL MUSSELS", "JONAH CRAB CLAWS", "LOBSTER MEAT", "SCALLOPS", "BABY OCTOPUS", "CALAMARI TUBES", "CALAMARI TUBES & TENTACLES", "COOKED SQUID", "OCTOPUS", "SEAFOOD MEDLEY", "SEAFOOD MEDLEY", "SEAFOOD MIX", "SEAFOOD MIX", "SQUID RINGS", "SURIMI FLAKES", "SURIMI STICKS", "BREADED CALAMARI", "BUTTERFLY SHRIMP", "COCONUT SHRIMP"],
      images: ["https://www.panamei.com/wp-content/uploads/2017/02/panamei_select_grouper_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_select_mahi_mahi-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_select_snapper5-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_select_tilapia_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_select_whole_tilapia_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/atlantic-salmon-portions-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/catfish-nuggets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/chum-salmon-portions-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/cod-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/flounder-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/grouper-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/mahi-mahi-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/ocean-perch-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/pollock-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/salted-pollock-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/silverside-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/smoked-salmon-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/smoked-salmon-3lb-1-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/swai-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/tilapia-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/tuna-portions-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/wahoo-steaks-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/whitting-fillets-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/whitting-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/snapper-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/whole-snapper-indonesia-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_shrimp_cocktail_900_975_2-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/CPTO-31-40-12oz-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/CPTOFF-26-30-2lb-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/CPUD-90-110-1lb-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/RAW-EZ-PEEL-31-40-12oz-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/PDTOFF-51-60-2lb-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/PDTO-13-15-2lb-900x975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/black-chilean-mussels-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/MUSSELS-WHOLE-CHILE-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/clams-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/conch-meat-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/conch-meat-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/blue-crab-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/crab_meat-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/CRAB-CLAW-MEAT-2pack-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/crawfish-2lb-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/greenshell-mussels-2lb-2-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/johah-crab-claws-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/lobster-meat-1lb-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_shellfish_scallops_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_baby_octopus_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/calamari-tubes.png", "https://www.panamei.com/wp-content/uploads/2017/02/Calamari-tubes-tentacles.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_squid_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_octopus_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/Seafood-medley-3lb-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_medley_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_mix_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/03/seafood-mix-surimi-china-1lb-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_squid_rings_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_surimi__flakes_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_seafood_surimi_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_breaded_calamari_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_breaded_shrimp_900_975-646x700.png", "https://www.panamei.com/wp-content/uploads/2017/02/panamei_breaded_coconut_shrimp_900_975-646x700.png"]
    }
  }, computed: {
    items() {
      return this.images.map((image, i) => ({
        image,
        title: this.titles[i]
      }))
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
    }
  }
}
</script>

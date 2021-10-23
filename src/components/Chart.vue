<template>
  <div>
    <Toolbar
      v-bind:show-share="false"
    />
    <h3>Masculine ism chart</h3>
    <md-table>
      <md-table-row>
        <md-table-head class="md-primary"></md-table-head>
        <md-table-head class="md-primary">Plural</md-table-head>
        <md-table-head>Dual</md-table-head>
        <md-table-head>Singular</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-head>Raf'</md-table-head>

        <md-table-cell class="arabic">مُسْلِ<b>مُونَ</b></md-table-cell>
        <md-table-cell class="arabic">مُسْلِ<b>مَانِ</b></md-table-cell>
        <md-table-cell class="arabic">&#x645;&#x064F;&#x0633;&#x0652;&#x0644;&#x0650;<b>&#x645;&#x064C;</b></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-head>Nasb</md-table-head>
        <md-table-cell class="arabic">مُسْلِ<b>مِينَ</b></md-table-cell>
        <md-table-cell class="arabic">مُسْل<b>مَيْنِ</b></md-table-cell>
        <md-table-cell class="arabic">مُسْلِ<b>مً</b></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-head>Jarr</md-table-head>
        <md-table-cell class="arabic">مُسْلِ<b>مِينَ</b></md-table-cell>
        <md-table-cell class="arabic">مُسْل<b>مَيْنِ</b></md-table-cell>
        <md-table-cell class="arabic">مُسْلِ<b>مٍ</b></md-table-cell>
      </md-table-row>
    </md-table>

    <h3>Feminine ism chart</h3>
    <md-table>
      <md-table-row>
        <md-table-head></md-table-head>
        <md-table-head>Plural</md-table-head>
        <md-table-head>Dual</md-table-head>
        <md-table-head>Singular</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-head>Raf'</md-table-head>
        <md-table-cell class="arabic">مُسْلُِم<b>اَتٌ</b></md-table-cell>
        <md-table-cell class="arabic">مُسْلِمَ<b>تَانِ</b></md-table-cell>
        <md-table-cell class="arabic">مُسْلِم<b>ةٌ</b></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-head>Nasb</md-table-head>
        <md-table-cell class="arabic">مُسْلِم<b>اَتٍ</b></md-table-cell>
        <md-table-cell class="arabic">مُسْلمَ<b>تَيْنِ</b></md-table-cell>
        <md-table-cell class="arabic">مُسْلِمَ<b>ةً</b></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-head>Jarr</md-table-head>
        <md-table-cell class="arabic">مُسْلِم<b>اَتٍ</b></md-table-cell>
        <md-table-cell class="arabic">مُسْلمَ<b>تَيْنِ</b></md-table-cell>
        <md-table-cell class="arabic">مُسْلِمَ<b>ةٍ</b></md-table-cell>
      </md-table-row>
    </md-table>

    <h3>Independent pronouns</h3>
    <div>They are always in Raf' status</div>
    <md-table>
      <md-table-row>
        <md-table-head>Plural</md-table-head>
        <md-table-head>Dual</md-table-head>
        <md-table-head>Singular</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic">هُم</div>
          <div><r>They</r></div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"> هُمَا</div>
          <div><r>Both of them</r></div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"> هُوَ</div>
          <div><r>He</r></div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic">هُنَّ</div>
          <div class="green">Them ladies</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">هُمَا</div>
          <div class="green">Both ladies</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">هِيَ</div>
          <div><r>She</r></div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic">أَنْتُم</div>
          <div class="green">All of you</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">أَنْتُمَا</div>
          <div class="green">Both of you</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">أَنْتَ</div>
          <div class="green">You (masc.)</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic">أَنْتُنَّ</div>
          <div class="green">All you ladies</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">أَنْتُمَا</div>
          <div class="green">Both you ladies</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">أَنْتِ</div>
          <div class="green">You (fem.)</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic">نَحنُ</div>
          <div class="green">We</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"></div>
          <div class="green"></div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">أَنَا</div>
          <div class="green">I</div>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <h3>Attached Pronouns</h3>
    <div>These are either in Nasb or Jarr status</div>
    <md-table>
      <md-table-row>
        <md-table-cell>
          <div class="arabic">هُم</div>
          <div><r>Them</r></div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">هُمَا</div>
          <div class="green">Both of them</div>
        </md-table-cell>
        <md-table-cell>
          <div >
            <span class="arabic">هُ</span>
            or
            <span class="arabic">هِ</span>
          </div>
          <div class="green">Him</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic">هُنَّ</div>
          <div class="green">All of them ladies</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">هُمَا</div>
          <div class="green">Both ladies</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">هَا</div>
          <div class="green">Her</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic">كُم</div>
          <div class="green">You all</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">كُمَا</div>
          <div class="green">Both of you</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">كَ</div>
          <div class="green">You (masc.)</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic">كُنَّ</div>
          <div class="green">All you ladies</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">كُمَا</div>
          <div class="green">Both of you</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">كِ</div>
          <div class="green">You (fem.)</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic">نَا</div>
          <div class="green">Us</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"></div>
          <div class="green"></div>
        </md-table-cell>
        <md-table-cell>
          <div>
            <span class="arabic">يِ</span>
            or
            <span class="arabic">نِي</span>
          </div>
          <div class="green">Me</div>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <h3>Harf of Jarr</h3>
    <div>Ism that come after them become jarr</div>
    <md-table>
      <md-table-row>
        <md-table-cell>
          <div class="arabic">
          ب, ت, ك, ل, و,مِن, فِي, عَن, عَلَى, حَتَّ, إِلَى
          </div>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <h3>Harf of Nasb</h3>
    <div>Ism they affect become nasb</div>
    <md-table>
      <md-table-row>
        <md-table-cell>
          <div class="arabic">
          إِنَّ, أَنَّ, كَأَنَّ, بِأَنَّ, لَيتَ, لَكِنَّ, لَعَلَّى
          </div>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <md-table>
      <md-table-row>

      </md-table-row>
    </md-table>

    <h3>Past tense verb</h3>
    <md-table>
      <md-table-row>
        <md-table-cell>
          <div class="arabic"> نَصَ<b>رُوا</b></div>
          <div class="green">They helped</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"> نَصَ<b>رَا</b></div>
          <div class="green">Both of them helped</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">نَصَ<b>رَ</b></div>
          <div class="green">He helped</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic"> نَصَ<b>رْنَ</b></div>
          <div class="green">Them ladies helped</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">نَصَ<b>رَتَا</b></div>
          <div class="green">Both ladies helped</div>
        </md-table-cell>
        <md-table-cell >
          <div class="arabic"> نَصَ<b>رَتْ</b></div>
          <div class="green">She helped</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell >
          <div class="arabic"> نَصَ<b>رْتُم</b></div>
          <div class="green">All of you helped</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"> نَصَ<b>رْتُما</b></div>
          <div class="green">Both of you helped</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">نَصَ<b>رْتَ</b></div>
          <div class="green">You helped</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic"> نَصَ<b>رْتُنَّ</b></div>
          <div class="green">All you ladies helped</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"> نَصَرْ<b>تُما</b></div>
          <div class="green">Both you ladies helped</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"> نَصَرْ<b>تِ</b></div>
          <div class="green">You (fem.) helped</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic"> نَصَ<b>رْنا</b></div>
          <div class="green">We helped</div>
        </md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell>
          <div class="arabic"> نَصَ<b>رْتُ</b></div>
          <div class="green">I helped</div>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <h3>Present tense verb</h3>
    <md-table>
      
<md-table-row>
        <md-table-head>Plural</md-table-head>
        <md-table-head>Dual</md-table-head>
        <md-table-head>Singular</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell >
          <div class="arabic"><b>يَ</b>نْصُ<b>رُونَ</b></div>
          <div class="green">They help</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"> <b>يَ</b>نْصُ<b>رَانِ</b></div>
          <div class="green">Both of them help</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"><b>يَ</b>نْصُ<b>رُ</b></div>
          <div class="green">He helps</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic"><b>يَ</b>نْصُ<b>رْنَ</b></div>
          <div class="green">Them ladies help</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"> <b>تَ</b>نْصُ<b>رَانِ</b></div>
          <div class="green">Both of them ladies help</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"> <b>تَ</b>نْصُ<b>رُ</b></div>
          <div class="green">She helps</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic"> <b>تَ</b>نْصُ<b>رُونَ</b></div>
          <div class="green">All of you help</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"> <b>تَ</b>نْصُ<b>رَانِ</b></div>
          <div class="green">Both of you help</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"><b>تَ</b>نْصُ<b>رُ</b></div>
          <div class="green">You help</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic"><b>تَ</b>نْصُ<b>رْنَ</b></div>
          <div class="green">All you ladies help</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"><b>تَ</b>نْصُ<b>رَانِ</b></div>
          <div class="green">Both you ladies help</div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic"><b>تَ</b>نْصُ<b>رِينَ</b></div>
          <div class="green">You (fem.) help</div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>
          <div class="arabic"> <b>نَ</b>نْصُ<b>رُ</b></div>
          <div class="green">We help</div>
        </md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell>
          <div class="arabic"> <b>أَ</b>نْصُ<b>رُ</b></div>
          <div class="green">I help</div>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <h3>Commanding </h3>
    <md-table>
      <md-table-row>
        <md-table-head></md-table-head>
        <md-table-head>Plural</md-table-head>
        <md-table-head>Dual</md-table-head>
        <md-table-head>Singular</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-head>Masc.</md-table-head>
        <md-table-cell >
          <div class="arabic">
            &#x623;&#x64F;&#x646;&#x652;&#x635;&#x64F;<b>&#x631;&#x64F;&#x648;&#x627;</b>
          </div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">&#x623;&#x64F;&#x646;&#x652;&#x635;&#x64F;<b>&#x631;&#x64E;&#x627;</b></div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">&#x623;&#x64F;&#x646;&#x652;&#x635;&#x64F;<b>&#x631;&#x652;</b></div>
        </md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-head >Fem.</md-table-head>
        <md-table-cell>
          <div class="arabic">&#x623;&#x64F;&#x646;&#x652;&#x635;&#x64F;<b>&#x631;&#x652;&#x646;&#x64E;</b></div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">&#x623;&#x64F;&#x646;&#x652;&#x635;&#x64F;<b>&#x631;&#x64E;&#x627;</b></div>
        </md-table-cell>
        <md-table-cell>
          <div class="arabic">&#x623;&#x64F;&#x646;&#x652;&#x635;&#x64F;<b>&#x631;&#x650;&#x64A;</b></div>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <h3>Types of مفعول (maf3ool) </h3>
    <md-table>
      <md-table-row>
        <md-table-cell>who / what / done to</md-table-cell>
        <md-table-cell>
          <div class="arabic"> مفعول بِه</div>
        ِ</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>when / where</md-table-cell>
        <md-table-cell>
          <div class="arabic"> مفعول فِيهِ
          </div>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <h3>كانَ ماض</h3>
    <md-table>
      <md-table-row>
        <md-table-cell>كانوا</md-table-cell>
        <md-table-cell>كانا</md-table-cell>
        <md-table-cell>كانَ</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>كُنَّ</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>كُنتُم</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>كُنَّ</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>كُنَّ</md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>
    </md-table>

  </div>
</template>

<script>
  import Toolbar from "./Toolbar";

  export default {
    components: {Toolbar}
  }
</script>

<style scoped>
  @media only screen and (min-width: 800px) {
    body {
      font-size: 30pt;
      background-color: lightblue;
    }
    .arabic {
      font-size: 36pt;
      margin-bottom: 25px;
      margin-top: 20px;

    }
    .green {
      font-size: 18pt;
    }
    r {
      font-size: 18pt;
    }
  }


  .green {
    color: green;
  }
  r {
    color: green;
  }
  .arabic b {
    color: red;
    font-weight: normal;
  }

  @media only screen and (max-width: 799px) {
    .arabic {
      font-size: 18pt;

    }
  }
</style>

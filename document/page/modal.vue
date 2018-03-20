<template>
    <document>
        <h1>模态窗 / v-modal</h1>

        <h2>Example</h2>
        <h6>效果演示</h6>

        <v-button @click="openModal1">普通模态窗</v-button>
        <v-button @click="openModal2">不可关闭模态窗</v-button>
        <v-button @click="openModal3">超长自适应模态窗</v-button>

        <v-modal name="modal1">
            <div class="content">
                普通模态窗
            </div>
        </v-modal>

        <v-modal name="modal2" canclose="false">
            <div class="content">
                不可关闭模态窗
                <v-button type="danger" @click="closeModal2">关闭</v-button>
            </div>
        </v-modal>

        <v-modal name="modal3">
            <div class="content">
                <h1>超长自适应模态窗</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quae aperiam. Amet expedita obcaecati sed temporibus assumenda nobis doloribus. Perferendis id cumque voluptatum facere reiciendis nemo repudiandae a animi architecto!
                    Ad, ipsum! Eligendi laudantium quas ea debitis quod. Quaerat ipsum, soluta voluptatibus eos autem unde, iste molestiae, consectetur incidunt dolore quisquam eligendi ea cum delectus quia dolorum rem reiciendis! Laudantium.
                    Voluptatum eius dolorem, maiores non eum suscipit autem aliquid repellendus exercitationem assumenda, commodi provident cumque nobis unde porro nisi cum optio minus placeat! Odit incidunt earum numquam nemo culpa distinctio?
                    Voluptatibus tempore magni libero excepturi. Eligendi ipsam a neque, iusto vero repellendus quia aliquid maxime facilis et consequatur quos ea culpa praesentium, iure dolor vitae corporis necessitatibus quae? Assumenda, omnis.
                    Placeat quae corrupti tenetur voluptatibus consequatur eligendi nisi laborum labore veritatis quibusdam a commodi, saepe necessitatibus, minus sapiente sit quod minima alias provident rerum blanditiis facilis fuga. Optio, fugiat error.
                    Dolores minus exercitationem minima necessitatibus voluptas dolore ut, ducimus veritatis quidem praesentium dolorum sint quis molestias, deleniti perferendis vel adipisci quam impedit provident inventore quaerat? Debitis nostrum eum ad nulla.
                    Modi distinctio numquam rerum voluptate odio quas itaque nemo perspiciatis a aspernatur rem ab ratione quia sunt qui ex quae perferendis quasi eaque labore ut, molestias dolor id ad. Iste.
                    Minima distinctio fuga nulla dicta earum error dolorem voluptas sed, a nemo amet ipsa at tempore unde impedit repellendus eum? Cum perspiciatis tenetur dicta quis labore ea explicabo, ad provident.
                    Ullam laudantium dicta repellat voluptatem nesciunt iure nostrum sequi nisi aut. Vero quis vitae sequi architecto ratione ipsam accusamus velit dolorum quidem in obcaecati blanditiis id alias, error dolores distinctio?
                    Odio dicta quisquam, quis illo, repellat aliquam unde assumenda fugit, possimus delectus voluptatem aliquid neque et? Expedita magnam, adipisci, quo consectetur beatae aliquid dicta et optio minima commodi repellat tempora.
                    Ipsum deleniti nobis commodi soluta autem nihil saepe voluptatum harum quis sunt omnis, architecto voluptates fugit? Error aspernatur consectetur, quia optio ullam maiores! Eum in dolorum eveniet temporibus accusamus ut?
                    Dolores reiciendis molestias delectus. Eos consequatur, sit debitis repudiandae cumque, laboriosam ex labore autem voluptate laudantium, est consectetur aliquid possimus ipsam nostrum vero nobis voluptatibus deserunt tempore delectus beatae aperiam.
                    Rerum suscipit excepturi deserunt iure labore, autem velit corporis unde facilis, ex eos accusantium ullam dicta perferendis dolore nesciunt ad cum fugiat optio ipsam soluta vero dolor esse. Obcaecati, quas.
                    Alias explicabo incidunt dolorem fugiat voluptatum voluptatem, consectetur omnis? Sit iure ab, magni blanditiis voluptas illum illo nihil molestiae reprehenderit eius voluptatem delectus rerum atque, sint dolorem nostrum sapiente id!
                    Dolore et, eos cumque corporis repellat architecto totam maiores quod enim fugit? Ad minima ipsum sint deleniti, commodi nulla dolorem ut itaque similique praesentium temporibus? Dolores iste earum recusandae soluta!
                    Esse quas temporibus tempora natus laboriosam odit repellat aut itaque distinctio. Ab ex omnis sequi fugit. Temporibus aperiam deleniti id! Blanditiis autem beatae sint quidem quibusdam porro aspernatur qui obcaecati.
                    Quibusdam nesciunt tempore quia eius molestiae, reprehenderit a facere eos corrupti suscipit, voluptas mollitia! Qui sed quos possimus libero eum voluptatem soluta repellendus repudiandae. Natus alias distinctio voluptas repellendus in.
                    Soluta, aut nihil dolor ipsa nisi ratione! Architecto autem placeat iste facere maxime dignissimos blanditiis amet quidem nisi cupiditate nemo consequuntur suscipit soluta, velit doloribus aperiam. Ducimus iusto laudantium deleniti.
                    Rem aperiam odio optio facilis repellendus provident tempora ab delectus fugiat accusamus architecto error ipsam at, unde tenetur cumque molestiae alias ipsa quis voluptates veritatis neque hic illum? Est, exercitationem.
                    Itaque aliquam, repellendus voluptate tenetur non aut dolor deleniti natus sapiente ab quas officia sequi, amet aperiam nihil. Ut veritatis laboriosam minus molestias aperiam, aut minima soluta ad exercitationem? Necessitatibus.
                    Numquam sed inventore temporibus, fugiat cupiditate fugit excepturi blanditiis, alias nemo eum ipsam in! Delectus, quisquam impedit ratione non minus eius voluptatibus. Eaque fugit neque maiores consectetur pariatur quas? Odio!
                    Ipsam dolore voluptate labore magnam! Minima debitis nihil, distinctio maiores aliquid ex veritatis blanditiis nemo repellendus neque culpa sequi alias saepe aliquam cum temporibus harum error laboriosam quas pariatur dolorem.
                    Qui pariatur autem possimus obcaecati, soluta ex sit ipsam minima quasi delectus aliquid numquam deleniti, voluptates perferendis eveniet ad fugit unde porro et dolores libero voluptas dolore? Atque, nesciunt? Minus.
                    Debitis similique possimus cupiditate beatae dolore voluptate pariatur atque ratione odio, sint sunt illo architecto ex, vero et minima repudiandae totam. Beatae esse harum eligendi labore quaerat dolorem impedit quae.
                    Soluta quas voluptate cum. Eos incidunt minus dolor placeat aspernatur perspiciatis sapiente magnam cum? Maiores sapiente fuga tempora, necessitatibus sint recusandae aliquam velit at corrupti corporis inventore ad! Doloribus, velit?
                    Qui quibusdam ducimus nemo ab quia, enim ipsum maiores, quidem porro reprehenderit libero voluptate veritatis! Obcaecati veritatis sunt quis quos aliquam, praesentium molestias doloribus provident magni tempore porro nam aut.
                    Deleniti tempora ratione tempore delectus laborum quia quam, minus doloremque magni laboriosam odio quibusdam sed sint odit, explicabo adipisci ut! Pariatur velit dolorem placeat, ex ad molestiae odio molestias autem.
                    Corporis numquam consectetur necessitatibus laborum dolorem. Excepturi vel sequi in minus, iste quasi officiis dignissimos blanditiis, laudantium, officia eius. Autem magni veritatis aperiam ea voluptas dicta mollitia expedita blanditiis pariatur?
                    Exercitationem saepe repudiandae deserunt placeat alias aut dolore, laudantium tempora pariatur repellendus. Eaque, harum modi! Illum dolor fugit facere id nihil nostrum asperiores ipsa tempore deserunt ullam, hic ipsam blanditiis.
                    Ut dolores doloribus quibusdam sit ex minus itaque, quo ducimus consequuntur esse exercitationem omnis ab quisquam dolor similique accusamus quasi fugiat ipsum nihil quae expedita, nisi fugit iusto. Blanditiis, nemo?
                </p>
            </div>
        </v-modal>

        <h2>Usage</h2>
        <h6>使用方法</h6>

<codeblock>
    &lt;v-modal name="modal1"&gt;
        普通模态窗
    &lt;/v-modal&gt;

    &lt;v-modal name="modal2" canclose="false"&gt;
        不可关闭模态窗
        &lt;v-button type="danger" @click="closeModal2"&gt;关闭&lt;/v-button&gt;
    &lt;/v-modal&gt;

    export default {
        methods:{
            openModal1(){
                this.youth.open("modal1");
            },
            openModal2(){
                this.youth.open("modal2");
            },
            closeModal2(){
                this.youth.close("modal2");
            }
        }
    }
</codeblock>

        <h2>Props</h2>
        <h6>组件属性</h6>

        <table>
            <tr>
                <th>属性名</th>
                <th>释义</th>
                <th>可用值</th>
                <th>默认值</th>
            </tr>
            <tr>
                <td>name</td>
                <td>
                    模态窗域名、标识名
                </td>
                <td>
                    String
                </td>
                <td>-</td>
            </tr>
            <tr>
                <td>canclose</td>
                <td>
                    是否可以通过背景层关闭模态窗
                </td>
                <td>
                    Boolean
                </td>
                <td>true</td>
            </tr>
        </table>

        <h2>Functions</h2>
        <h6>函数</h6>

        <function>
            <h1>Vue.youth.open</h1>
            <p>打开模态窗</p>
            <table>
                <tr>
                    <th>参数名</th>
                    <th>释义</th>
                    <th>备注</th>
                </tr>
                <tr>
                    <td>name</td>
                    <td>要打开的模态窗域名、标识名</td>
                    <td>-</td>
                </tr>
            </table>
        </function>

         <function>
            <h1>Vue.youth.close</h1>
            <p>关闭模态窗</p>
            <table>
                <tr>
                    <th>参数名</th>
                    <th>释义</th>
                    <th>备注</th>
                </tr>
                <tr>
                    <td>name</td>
                    <td>要关闭的模态窗域名、标识名</td>
                    <td>-</td>
                </tr>
            </table>
        </function>
    </document>
</template>

<style lang="less">

.v-button {
    margin: 8px;
}

.content {
    text-align: justify;
    width: 640px;
    padding: 48px;
}

</style>


<script>
export default {
    methods:{
        openModal1(){
            this.youth.open("modal1");
        },
        openModal2(){
            this.youth.open("modal2");
        },
        closeModal2(){
            this.youth.close("modal2");
        },
        openModal3(){
            this.youth.open("modal3");
        }
    }
}
</script>

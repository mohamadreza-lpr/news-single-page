<template>
      <div class="p p-1">
            <b-row class="p" align-v="center">
                  <p class="paragraph">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                        آینده، 
                  </p>
            </b-row>
      </div>
</template>

<script>
export default {};
</script>

<style>
.p{
    overflow: hidden;
}
.paragraph{
    white-space: nowrap;
    font-size: 18px;
    font-weight: 600;
    color: white;
    animation: moveParagraph 20s linear infinite;
}
@keyframes moveParagraph {
      100% {
            transform: translateX(1000px);
      }
}
</style>

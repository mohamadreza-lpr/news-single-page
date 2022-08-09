<template>
    <div>
        <span id="clock">
            {{ this.time }}
        </span>
    </div>
</template>
<script>
export default {
      data() {
            return {
                  interval: null,
                  time: null,
            };
      },
      beforeDestroy() {
            // prevent memory leak
            clearInterval(this.interval);
      },
      created() {
            // update the time every second
            this.interval = setInterval(() => {
                  // Concise way to format time according to system locale.
                  // In my case this returns "3:48:00 am"
                  this.time = Intl.DateTimeFormat(navigator.language, {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                  }).format();
            }, 1000);
            
      },
};
</script>
<style>
#clock{
    font-size: 28px;
    font-weight: 700;
    color: #FFFFFF;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
</style>
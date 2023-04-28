<template>
    <div>
        <vue3-html2pdf
            :show-layout="false"
            :float-layout="true"
            :enable-download="true"
            :preview-modal="true"
            :paginate-elements-by-height="1400"
            filename="hee hee"
            :pdf-quality="2"
            :manual-pagination="false"
            pdf-format="a4"
            pdf-orientation="landscape"
            pdf-content-width="800px"
            @progress="onProgress($event)"
            @hasStartedGeneration="hasStartedGeneration()"
            @hasGenerated="hasGenerated($event)"
            ref="html2Pdf">
            <template v-slot:pdf-content>
                <!-- PDF Content Here -->
            </template>
        </vue3-html2pdf>
    </div>
</template>
<script>
import Vue3Html2pdf from 'vue3-html2pdf';

export default {
    methods: {
        /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
        generateReport() {
            this.$refs.html2Pdf.generatePdf();
        },
    },

    components: {
        Vue3Html2pdf,
    },
};
</script>

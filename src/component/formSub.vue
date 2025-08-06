<template>
    <div class="container">
        <form>
            <h1 style="text-align: center;">Quan ly tac gia</h1>
            <div class="mb-3">
                <label class="form-label">Ten</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="b.ten">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Gioi tinh</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" v-model="b.gioiTinh" :value="true">
                    <label class="form-check-label" for="radioDefault1">
                        Nam
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" v-model="b.gioiTinh" :value="false">
                    <label class="form-check-label" for="radioDefault2">
                        Nu
                    </label>
                </div>
            </div>
            
            <div class="mb-3">
                <label class="form-label">Dia chi</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="b.diaChi">
            </div>
            <div class="mb-3">
                <label class="form-label">Tuoi</label>
                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="b.tuoi">
            </div>
        </form>
    </div>
</template>

<script setup>
const b = defineModel('b',
{
    type : Object,
    default: () =>({
        id: null,
        ten: '',
        gioiTinh: true,
        diaChi: '',
        tuoi: null
    })
})
</script>

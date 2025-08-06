<script setup>
import formSub from '@/component/formSub.vue';

import { ref } from 'vue';
const listGV = ref([
    {
        id: 1,
        ten: 'Minh 1',
        gioiTinh: true,
        diaChi: 'vinhome 1',
        tuoi: 10
    },

    {
        id: 2,
        ten: 'Minh 2',
        gioiTinh: true,
        diaChi: 'vinhome 2',
        tuoi: 12
    },

    {
        id: 3,
        ten: 'Minh 3',
        gioiTinh: false,
        diaChi: 'vinhome 3',
        tuoi: 33
    },
])

const newGV = ref({
    id: null,
    ten: '',
    gioiTinh: true,
    diaChi: '',
    tuoi: null
})

const editId = ref(null)
const submitForm = (isEdit) => {
    if (!isEdit) {
        if (newGV.value.ten && newGV.value.diaChi && newGV.value.tuoi > 0) {
            newGV.value.id = listGV.value.length + 1;
            listGV.value.push({
                id: newGV.value.id,
                ten: newGV.value.ten,
                gioiTinh: newGV.value.gioiTinh,
                diaChi: newGV.value.diaChi,
                tuoi: newGV.value.tuoi
            })
            newGV.value.id = null
            newGV.value.ten = ''
            newGV.value.gioiTinh = true
            newGV.value.diaChi = ''
            newGV.value.tuoi = null
        } else {
            alert("vui long nhap thong tin hop le")
        }
    } else {
        if (newGV.value.ten && newGV.value.diaChi && newGV.value.tuoi > 0) {
            const index = listGV.value.findIndex(item => item.id === editId.value)
            if (index !== -1) {
                listGV.value[index] = {
                    id: newGV.value.id,
                    ten: newGV.value.ten,
                    gioiTinh: newGV.value.gioiTinh,
                    diaChi: newGV.value.diaChi,
                    tuoi: newGV.value.tuoi
                    
                }
                newGV.value.id = null
                newGV.value.ten = ''
                newGV.value.gioiTinh = true
                newGV.value.diaChi = ''
                newGV.value.tuoi = null
                
            } else {
                alert("vui long nhap thong tin hop le")
            }
        }
    }
}

    const handleRowClick = (item) => {
        newGV.value.id = item.id
        newGV.value.ten = item.ten
        newGV.value.gioiTinh = item.gioiTinh
        newGV.value.diaChi = item.diaChi
        newGV.value.tuoi = item.tuoi
        editId.value = item.id
    }

    const xoa = (index) => {
        listGV.value.splice(index, 1)
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <formSub v-model:b="newGV"></formSub>
            <button class="btn btn-primary" @click="submitForm(false)"
                style="height: 40px; width: 80px; margin-right: 20px;">Them</button>
            <button class="btn btn-primary" @click="submitForm(true)" style="height: 40px; width: 80px;">Sua</button>
        </div>
        <div class="row">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Ten</th>
                        <th scope="col">Gioi Tinh</th>
                        <th scope="col">Dia Chi</th>
                        <th scope="col">Tuoi</th>
                        <th scope="col">Chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(item, index) in listGV" :key="item.id">
                        <tr style="cursor: pointer;" @click="handleRowClick(item)">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.ten }}</td>
                            <td>{{ item.gioiTinh ? 'nam' : 'nu' }}</td>
                            <td>{{ item.diaChi }}</td>
                            <td>{{ item.tuoi }}</td>
                            <td>
                                <button @click="xoa(index)" class="btn btn-success">Xoa</button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>
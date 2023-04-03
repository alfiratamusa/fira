function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-green-500 to-green-600">
                <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                        KTP
                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                            >
                              Nama:
                            </label>
                            <input
                                class="broder py-1 px-2 text-grey-600"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                        </div>

                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-Ig text-gray-600"
                                for="nama"
                            >
                                Tempat/Tanggal lahir:
                            </label>
                            <input
                                class="border py-1 px-2 text-grey-600"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                        </div>

                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-Ig text-gray-600"
                                for="nama"
                            >
                                Jenis Kelamin:
                            </label>
                            <input
                                class="border py-1 px-2 text-grey-600"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                        </div>

                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-Ig text-gray-600"
                                for="nama"
                            >
                                Alamat:
                            </label>
                            <input
                                class="border py-1 px-2 text-grey-600"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                        </div>

                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-Ig text-gray-600"
                                for="nama"
                            >
                                Agama:
                            </label>
                            <input
                                class="border py-1 px-2 text-grey-600"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                        </div>
                        <div class="flex flex-col mb-4">
                             <label
                                class="mb-2 font-bold text-Ig text-gray-600"
                                for="nama"
                            >
                                Status Perkawinan:
                            </label>
                            <input
                                class="border py-1 px-2 text-grey-600"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                        </div>
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-Ig text-gray-600"
                                for="nama"
                            >
                                Pekerjaan:
                            </label>
                            <input
                                class="border py-1 px-2 text-grey-600"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                        </div>
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-4 font-bold text-Ig text-gray-600"
                                for="nama"
                            >
                                Kewarganegaraan:
                            </label>
                            <input
                                class="border py-1 px-2 text-grey-600"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                        </div>
                        <button
                         class="block bg-orange-400 hover:bg-orange-600 text-white uppercase text-lg mx-auto p-4 rounded"
                        type="submit"
                        >
                            Buat Akun
                        </button>
                    </form>
                    <a
                        class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gry-900"
                        href="/"
                    >
                        Telah Memiliki Akun?
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;
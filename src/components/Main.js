import base from "../srcimags/basin.png"
import logo from "../srcimags/logo.jpeg"


export function Main () {

    return (<>

            <main>
                <div class="flex">
                    
                    <img class="w-1/5" src={logo} alt="logo" />
                    <h1>
                        Bem Vindo À OakSchool
                    </h1>
                    <img class="w-1/5" src={base} alt="main" />
                    <div>
                        Video Aqui!
                    </div>
                    <button class="text-slate-500" type="button">Quero Aprender Inglês !!!</button>
                    <div>
                    
                    </div>
                </div>
            </main>

        </>
    )

}
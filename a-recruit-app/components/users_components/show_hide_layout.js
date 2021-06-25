import React ,{useState,useEffect} from 'react'


export default function show_hide_layout(props,{children}) {
    
    const [show_todo, set_show_todo] = useState(false);

    useEffect(()=>{

        if(props.show_hide === true){
            set_show_todo(true)
        }
    
    },[props.show_hide])

    const show_or_hide = () => {

        set_show_todo(!show_todo)
        if(props.show_hide && props.callback){
            props.callback()
        }

        console.log(  show_todo+" and "+props.show_hide )
    }


    return (
        <div>
            {/* ZONE A DEROULER #TERMINER INSCRIPTION */}

            <div className="show_hide_layout orientationV center">
                        
                {/* ENTËTE DE LA ZONE DEROULANTE */}
                <div className="head w100 orientationH spaceBetween center" onClick={()=>show_or_hide()}>
                    <div className="demandes_head text center">{props.title}</div>
                        <div className="direction_arrow_z orientationH fromRight center">
                            {props.statut && <div className={"button unfinished" + (!show_todo? " " : " bottom5")}>{props.statut}</div>}
                            <div><p><i className={"direction_arrow" + (!show_todo? " down" : " up")}></i></p></div>                          
                        </div>
                    </div>

                    {/* FORMULAIRE D'INSCRIPTION À COMPLETER */}

                    {show_todo? (
                        
                        <div className="w100">{props.children}</div>

                    ): (props.callback && props.show_hide ) ?( 

                       <div className="w100">{props.children}</div> 

                    ):null}
                </div>
        </div>
    )
}

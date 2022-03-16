
import Image from "next/image"
import sumitImage  from '../public/images/sumit.jpeg';

export default function Sumit(){

    return(
        <>
            <main>
                This section belongs to sumit.
                <div style={{padding:'5%', margin:'5%', textAlign:'center'}}>
                    <Image
                        src={sumitImage}
                        width={'320'}
                        height={'320'}
                    />
                </div>
                
            </main>
        </>
    )
}
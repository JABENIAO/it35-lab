import { 
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>About Me</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonCard>
                    {/* Profile Image */}
                    <img
                        alt="Silhouette of mountains"
                        src="https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/419172627_3722116908110720_3435621069034907359_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFx3lUk0dXY9cSC6tgQwCLr1-30xmXJYpvX7fTGZclim6hlPGPLob_Gtr99F_g0rjoJo3Px6i5QQ8d3PGanCuY8&_nc_ohc=9rD5m8uzUeIQ7kNvgEvTVqc&_nc_oc=AdiWzwtKU2kRTlBQ8ZX8oWZ72khEnCfDmuyj6RCAQJ9XYbrNWF262YQ2W0cgrPzyuMU&_nc_zt=23&_nc_ht=scontent.fdvo1-1.fna&_nc_gid=AhPToOr1SPxqWIWWIqvd7kZ&oh=00_AYE0wptANV0aDILkTuUllFfghaKyvdOPulgJMczJFt5D_Q&oe=67D1132C"
                        style={{ width: "100%" }}
                    />

                    <IonCardHeader>
                        <IonCardTitle>JEBBIE A. JABENIAO</IonCardTitle>
                        <IonCardSubtitle>BAJEB</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        "Jebbie A. Jabeniao: A true embodiment of loyalty and dedication. Never late, always hard at work, and though stress may come his way."
                    </IonCardContent>

                    {/* Skills Section */}
                    <IonCardContent>
                        <h3 style={{ color: "brown" }}>Skills</h3>
                        <ul style={{ textAlign: "left", paddingLeft: "20px", color: "black" }}>
                            <li>Designer</li>
                            <li>PRORAMER KONOHAY</li>
                            <li>Encoder</li>
                        </ul>
                    </IonCardContent>

                    {/* Talents Section */}
                    <IonCardContent>
                        <h3 style={{ color: "brown" }}>Talents</h3>
                        <ul style={{ textAlign: "left", paddingLeft: "20px", color: "black" }}>
                            <li>Basketball</li>
                            <li>Gaming</li>
                        </ul>
                    </IonCardContent>

                    
                    <IonCardContent>
                        <h3 style={{ color: "brown" }}>LIKES</h3>
                        <ul style={{ textAlign: "left", paddingLeft: "20px", color: "black" }}>
                            <li>TRAVEL</li>
                        </ul>

                    
                        <img
                            alt="Hiking"
                            src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/419402193_3722117024777375_6298772256135499202_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEX9NWCHFkv4h0-CkZ2JUI7fS1aq8W4J4h9LVqrxbgniLxbxDCRWzi43LDCF7x7o3QHiKxvcmUiizUhv8ZNF0dp&_nc_ohc=B_X5TkC-bi8Q7kNvgFQbZbW&_nc_oc=AdiFkAGrQCGVhoVGRJpCOmtXNEiebpUKs_90O_BCfHyENaKi5dSE6oIn97ZF497zbzY&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=A_JHtIQrBlA_rwXXhxlgzjQ&oh=00_AYFcPUpSDujWgLmHRsmRFqaaxmCBczIYa-rvfmFNsCmbhA&oe=67D12C8B"
                            style={{
                                width: "100%",
                                borderRadius: "8px",
                                marginTop: "10px"
                            }}
                        />
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default About;

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
    IonToolbar,
    IonAvatar,
    IonIcon
} from '@ionic/react';
import { briefcase, basketball, airplane } from 'ionicons/icons'; // Importing icons

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
                    {/* Ionic Avatar for Profile Image */}
                    <IonAvatar style={{ display: "block", margin: "0 auto", marginTop: "20px", width: "120px", height: "120px", borderRadius: "50%" }}>
                        <img
                            alt="PROFILE IMAGE"
                            src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/387797322_3659908414331570_509302908900213725_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHs7Aea0DRNYv-HijX0z6pqDcOX-o3DDIANw5f6jcMMgDeI_ADoBMYuaomhoyds9qrRaFwAogJgLzutUW01CmpX&_nc_ohc=HZYEpevpz70Q7kNvgHTjvKw&_nc_oc=AdmSM7aHwgju8mUobZ1wXOqKwTGzY56tbW5RmIQbJkfDmkqMby0pdo5EepjPrqG-UNkjze0Rm3lzFSwApp8PP-0F&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=01kcWtlQv2UoklgUiVpWhA&oh=00_AYGPkT6iGrkfftEHbIzAcSriyyBkYZT7cPiwJLa7iABASg&oe=67E2B959"
                            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                        />
                    </IonAvatar>

                    <IonCardHeader>
                        <IonCardTitle>JEBBIE A. JABENIAO</IonCardTitle>
                        <IonCardSubtitle>BAJEB</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        "Jebbie A. Jabeniao: A true embodiment of loyalty and dedication. Never late, always hard at work, and though stress may come his way."
                    </IonCardContent>

                    {/* Skills Section with Icon */}
                    <IonCardContent>
                        <h3 style={{ color: "brown", display: "flex", alignItems: "center" }}>
                            <IonIcon icon={briefcase} style={{ marginRight: "10px" }} />
                            Skills
                        </h3>
                        <ul style={{ textAlign: "left", paddingLeft: "20px", color: "black" }}>
                            <li>Designer</li>
                            <li>PROGRAMMER KONOHAY</li>
                            <li>Encoder</li>
                        </ul>
                    </IonCardContent>

                    {/* Talents Section with Icon */}
                    <IonCardContent>
                        <h3 style={{ color: "brown", display: "flex", alignItems: "center" }}>
                            <IonIcon icon={basketball} style={{ marginRight: "10px" }} />
                            Talents
                        </h3>
                        <ul style={{ textAlign: "left", paddingLeft: "20px", color: "black" }}>
                            <li>Basketball</li>
                            <li>Gaming</li>
                        </ul>
                    </IonCardContent>

                    {/* Likes Section with Icon */}
                    <IonCardContent>
                        <h3 style={{ color: "brown", display: "flex", alignItems: "center" }}>
                            <IonIcon icon={airplane} style={{ marginRight: "10px" }} />
                            Likes
                        </h3>
                        <ul style={{ textAlign: "left", paddingLeft: "20px", color: "black" }}>
                            <li>TRAVEL</li>
                        </ul>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default About;

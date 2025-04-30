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

            <IonContent fullscreen style={{ backgroundColor: '#d0f0c0' }}>
            <IonCard>
    {/* Full Width Header Image */}
    <img
        alt="Profile Banner"
        src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/487119782_4082723215383419_7980983998449219994_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFL6rHL3bGdRKV4AnbgCawRdKj-5y3JkNh0qP7nLcmQ2BOFRDGrYbrRK6hGVrpMuUgN7wBRt5LONIIzygxXink4&_nc_ohc=3k9Xyvv9n0sQ7kNvwFkREh3&_nc_oc=AdkGzUJjrpuuwAprXU0gRv1_LSXUDiX8ZPytuTrr6A3BtQZ1xwrpQfRG0bHZR_eELeYzLYfgQfGkM2PqdZiOTH0Q&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=KXoqlzxTMsVXQFbs6bc3cg&oh=00_AfFUZuHEDoaoW-ta_uCnUhHHfa1BB6U-XPwOocadkX7nzA&oe=680BF2B3"
        style={{ width: "100%", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
    />

    <IonCardHeader style={{ textAlign: "center" }}>
        {/* Avatar Image */}
        <img
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid white",
                marginTop: "-50px",
                backgroundColor: "#ffffff"
            }}
        />

        <IonCardTitle style={{ fontSize: "22px", fontWeight: "bold", marginTop: "10px" }}>
            👨‍💻 JEBBIE A. JABENIAO
        </IonCardTitle>
        <IonCardSubtitle>✨ a.k.a. BAJEB ✨</IonCardSubtitle>
    </IonCardHeader>

                    <IonCardHeader>
                        <IonCardTitle style={{ fontSize: "22px", fontWeight: "bold" }}>👨‍💻 JEBBIE A. JABENIAO</IonCardTitle>
                        <IonCardSubtitle>✨ a.k.a. BAJEB ✨</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent style={{ fontStyle: 'italic', textAlign: 'center' }}>
                        "A true embodiment of loyalty and dedication. Never late, always hard work."
                    </IonCardContent>

                    {/* Skills Section */}
                    <IonCardContent>
                        <h3 style={{ color: "brown" }}>🛠️ Skills</h3>
                        <ul style={{ textAlign: "left", paddingLeft: "20px", color: "black" }}>
                            <li>🎨 Designer</li>
                            <li>💻 Programmer (CHAR RA JUD)</li>
                            <li>⌨️ Encoder</li>
                        </ul>
                    </IonCardContent>

                    {/* Talents Section */}
                    <IonCardContent>
                        <h3 style={{ color: "brown" }}>🎯 Talents</h3>
                        <ul style={{ textAlign: "left", paddingLeft: "20px", color: "black" }}>
                            <li>🏀 Basketball</li>
                            <li>🎮 Gaming</li>
                        </ul>
                    </IonCardContent>

                    {/* Likes Section */}
                    <IonCardContent>
                        <h3 style={{ color: "brown" }}>❤️ Likes</h3>
                        <ul style={{ textAlign: "left", paddingLeft: "20px", color: "black" }}>
                            <li>✈️ Travel</li>
                        </ul>

                      
                            
                        
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default About;

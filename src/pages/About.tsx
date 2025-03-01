import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
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
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-text-center">
        <IonCard style={{
          maxWidth: "350px",
          margin: "auto",
          textAlign: "center",
          paddingTop: "50px",
          backgroundColor: "transparent",
        }}>
          <img
            src= "https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/434888099_3774544612867949_2331734001849568486_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFg19X4GjTUiU51z7NxFg1XNgsrMlMa0ko2CysyUxrSSvEwMnaor46e2cmRKk8afvBxvm7dhgm-1bxOmKEsLeXp&_nc_ohc=gmqPl4KHrN0Q7kNvgFl4Dkg&_nc_oc=AdgbqC05EGvA-I7bqu7zWk2EwyPCdJv5JDtIsO7n_xv-2G8Ln2N_MabDBmB6FuVXNxw&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=AxaaH5Re6_LRefdYtns_66X&oh=00_AYD8kCmMHHZy9pjD179ZY9CruFeK3xvtwaf1mER26Jxx9g&oe=67C73665"
            alt="BAJEB"
            style={{
              display: "block",
            }}
          />
          <IonCardHeader style={{ backgroundColor: "brown" }}>
            <IonCardTitle style={{ color: "white" }}>JEBBIE A JABENIAO</IonCardTitle>
            <IonCardSubtitle style={{ color: "white" }}>WALA MEMBRO BEBE NA</IonCardSubtitle>
            <IonCardSubtitle style={{ color: "white" }}>SUPP NIGGA</IonCardSubtitle>
          </IonCardHeader>
          
         
         
          
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
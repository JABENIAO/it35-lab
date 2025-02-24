import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonButton 
} from '@ionic/react';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Feed</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>JEBBIE JABENIAO</IonCardTitle>
            <IonCardSubtitle>IT STUDENT</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            SUPP NIGGA.
          </IonCardContent>

          <IonButton fill="clear">Action 1</IonButton>
          <IonButton fill="clear">Action 2</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Feed;

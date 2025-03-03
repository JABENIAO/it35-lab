import { 
  IonAvatar,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

import { chatbubbleOutline } from 'ionicons/icons'; 

const checkbox = [
  { 
    name: "Jebbie Jabeniao", 
    img: "https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/319520929_823113845584818_1207869359198182760_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEmokeOX2EGVcKkYjhF3PHPBHiPph60-VgEeI-mHrT5WFY7F2hIfGK5aF9t1Oi-HIM7yNpviuOczMtzmna4ENtp&_nc_ohc=OiqkAyohRfQQ7kNvgEru7Y3&_nc_oc=AdionPCshT0TOFjK-ENve3NtM1-6zlMd3HyyFwbqn1R0wdNrk6SuxBoAjHqiTg4d6NKzuPuJOUIkg_yf4ku5F5mf&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=AjC68AJmYDtCviy-_0xPqn2&oh=00_AYDC33-GukYs8ujjmagxsOERIrTMndkx1MEzYL6qNSwyPA&oe=67CA313F" 
  },
  { 
    name: "Kobe ng Pinas", 
    img: "https://cdn.allfamous.org/people/avatars/jonahrenz-jacob-ubwe-1626274304226-allfamous.org.jpg" 
  },
  { 
    name: "Mr Long Bomb", 
    img: "https://fastbreak.com.ph/wp-content/uploads/2025/02/Long-Bomb.jpg" 
  },
];

const Favorites: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle> SUPERSTAR PLAYERS</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen color="light"> 
        <IonList inset={true}>
          {checkbox.map((contact, index) => ( 
            <IonItem key={index} button>
              <IonAvatar slot="start">
                <img alt={contact.name} src={contact.img} />
              </IonAvatar>
              <IonLabel>{contact.name}</IonLabel>
              <IonIcon icon={chatbubbleOutline} slot="end" size="large" color="primary" />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Favorites;
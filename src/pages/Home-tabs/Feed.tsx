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

const subjects = [
  { title: "Application Dev & Emerging Technologies",
    subtitle: "Lecture - Wednesday 10:30 AM - 12:00 PM\nLaboratory - Monday 1:00 PM - 2:30 PM",
    instructor: "Cliff Evangelio Fernandez",
    color: "primary" },

  { title: "Elective 4 Hardware Implementation Technologies",
    subtitle: "Lecture - Wednesday 9:00 AM - 10:30 AM\nLaboratory - Wednesday 1:00 PM - 2:30 PM",
    instructor: "Charlegene Bulahan Ogok",
    color: "secondary" },

  { title: "System Integration & Architecture",
    subtitle: "Lecture - Thursday 9:00 AM - 10:30 AM",
    instructor: "Phoebe B. Sudaria",
    color: "tertiary" },

  { title: "Phillipine Indigenous Communities",
    subtitle: "Lecture - Monday 9:00 AM - 10:30 AM",
    instructor: "Rose Ann Cuizoz",  
    color: "success" },

  { title: "People and Earth Ecosystem", 
    subtitle: "Lecture - Tuesday 9:00 AM - 10:30 AM", 
    instructor: "Alveen Gomez",  
    color: "warning" },

  { title: "Enterprise", 
    subtitle: "Lecture - Friday 1:00 PM - 2:30 PM \n Laboratory - Thursday 2:30 PM - 4:00 PM",
    instructor: "Cliff Evangelio Fernandez",
    color: "danger" },
];

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>SUBJECT SCHEDULES</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        {subjects.map((subject, index) => (
          <IonCard key={index} color={subject.color}>
            <IonCardHeader>
              <IonCardTitle>{subject.title}</IonCardTitle>
              <IonCardSubtitle>{subject.subtitle}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p><strong>Instructor:</strong> {subject.instructor}</p>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Feed;

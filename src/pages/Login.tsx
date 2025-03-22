import { 
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent, 
  IonHeader, 
  IonInput, 
  IonInputPasswordToggle, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonModal, 
  IonPage, 
  IonText, 
  IonTitle, 
  IonToast, 
  IonToolbar,
  IonAvatar,
  useIonRouter
} from '@ionic/react';
import './Login.css'; 
import { useState } from 'react';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);

  const doLogin = () => {
   
    if (!email || !password || email.trim() === '' || password.trim() === '') {
      alert('Please enter both email and password.');
      return; 
    }
  
    
    if (email.match(/[A-Za-z0-9]/) && password.match(/[A-Za-z0-9]/)) {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };
  

  const doRegister = () => {
    setShowToast(true);  
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="login-background">
        <div className="login-container">
          <IonCard className="login-card">
            <IonCardContent>
              {/* Centered Ionic Avatar for logo */}
              <IonAvatar className="app-icon">
                <img 
                  src="https://www.geekandjob.com/uploads/wiki/f6977cfa0930098d4dcfa71f9c140b06.png"
                  alt="App Icon"
                />
              </IonAvatar>

              {/* Email input field */}
              <IonInput 
                type="email" 
                label="Email" 
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)} 
              />
              
              {/* Password field */}
              <IonInput 
                type="password" 
                label="Password" 
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)} 
              >
                <IonInputPasswordToggle slot="end" />
              </IonInput>
              <IonButton className="login-button" onClick={doLogin} expand="full">
                Login
              </IonButton>

              <IonButton className="login-button" onClick={() => setShowModal(true)} expand="full" color="secondary">
               SIGN UP 
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Registration Successful!"
          duration={2000}
        />

        <IonModal isOpen={showModal} onDidDismiss={closeModal} className="registration-modal">
          <IonContent className="ion-padding">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Register</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={closeModal}>Close</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonList>
              <IonItem>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput 
                  value={username}
                  onIonChange={(e) => setUsername(e.detail.value!)} 
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput 
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)} 
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput 
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)} 
                >
                  <IonInputPasswordToggle slot="end" />
                </IonInput>
              </IonItem>
            </IonList>
            <IonButton expand="full" onClick={doRegister}>
              Register
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Login;

export default {
  dev: {
    baseUrl: "https://account-dev.resmed.com",
    region: {
      au: "en-au",
      us: "en-us",
      apac: "en-ap",
      br: "pt-br",
      lam: "es-xl",
      no: "nb-no",
      se: "sv-se",
      frch: "fr-ch",
      dech: "de-ch"
    },
    account: {
      signin_login: {
        mail: "editsubscription@mailinator.com",
        pwd: "Welcome@01",
      },
      signinreg_notverified: {
        mail: "cypressustest@mailinator.com",
        pwd: "Welcome@01",
      },
      changeemail_prevmail: {
        mail: "change-email@mailinator.com",
        pwd: "Welcome@01",
      },
      changepwd: {
        mail: "changepwd@mailinator.com",
        pwd: "Welcome@01",
      },
      
      manageuser: {
        mail: "verified-uset@mailinator.com",
        pwd: "Welcome@01",
      },
      swedensignin_login:{
        mail:"sweden_cypresstest@mailinator.com",
        pwd:"Welcome@01",
      },
      swissfrance_signin_login:{
        mail:"swissfrance_cypresstest@mailinator.com",
        pwd:"Welcome@01",
      },
      swissgerman_signin_login:{
        mail:"swissgerman_cypresstest@mailinator.com",
        pwd:"Welcome@01",
      }
    },
  },
  uat: {},
  prod: {},
  language: {
    en: {
      signin: "Sign in",
      ResMedEmplpoyeeLogin:"ResMed Employee Login"
    },
    pt: {
      signin: "Entrar na sua conta",
    },
    es: {
      signin: "Registrarse",
    },
    sv:{
      ResMedEmplpoyeeLogin:"Login ResMed-anställda"
    },
    nb:{
      ResMedEmplpoyeeLogin:"Pålogging for ResMed-ansatte"
    },
    fi:{
      ResMedEmplpoyeeLogin:"ResMedin työntekijän kirjautuminen"
    },
    da:{
      ResMedEmplpoyeeLogin:"ResMed medarbejder log-in "
    }
  },
  content: {
    signin: {
      verifymsg:
        "The email address was already registered but not verified, please click on the information icon for more details ",
    },
    signup: {
      emailmsg: "Please enter an email",
      fname: "Signup",
      lname: "Test",
      pwd: "Welcome@01",
      org: "Resmed",
      country: "United States",
      businessType: "HME",
      jobFunction: "Owner",
      zipcode: "678456",
      invalidmail: "cypress-test@mail",
      invalidmsg: "Please enter a valid e-mail address.",
      correctmail: "cypressustests@mailinator.com",
      successmsg: "Brief information about account resmed / sign up",
      reg_notverified:
        "The email address was already registered but not verified, please click on the information icon for more details ",
      clinical_alert: "Clinical Content",
      Commercial_alert: "Commercial Content",
      technicaltext:"Technical Content ",
      technicaltitle:"Technical Content",
      technicaldesc:"Which I will be able to access once I have completed ResMed's technical training.",
    },
    changeemail: {
      errormsg:
        "This email is already registered. Please double check and try again.",
      newmail: "changeemail2@mailinator.com",
      successmsg: "Check your email.",
    },
    changepwd: {
      same_old_new_pwd: "Welcome@01",
      same_pwd_msg: "Old and New password should not be same",
      criteria_pwd: "Welcome",
      criteria_pwd_msg:
        "Passwords must be 10 or more than 10 characters and contain at least one character from each of the following:",
      changepwd_newpwd: "Welcome@03",
      new_pwd: "Welcome@03",
      success_msg:"Your password has been changed successfully",
      last4_oldpwd: "Welcome@03",
      last4_newpwd: "Welcome@01",
      last4_prevpwd_errmsg:
        "Please don't use last 4 previous passwords. try some new passwords",
    },
    resetpassword: {
      resetpwdpagetitle:"Reset password",
      resetemail:"abc@resmed.com",
      resetssoerror:"Password cannot be changed for ResMed Users",
    },
    myaccount: { myaccount_title: "My profile", fname: "AuTestUser", country: "Australia",newcountry: "Australia", backtoAccount_link_text: "Back to account" },
    swissfrance_myaccount: { myaccount_title: "Mon profil", fname: "swissfrance", country: "Suisse",newcountry: "Suisse", backtoAccount_link_text: "Revenir au compte" },
    swissgerman_myaccount: { myaccount_title: "Mein Profil", fname: "swissgerman", country: "Schweiz",newcountry: "Schweiz", backtoAccount_link_text: "Zurück zum Konto" },
    subscribe: { popup_text: "Subscription Confirmation", backtoprofile_text: "Back to My profile" },
    swissfrance_subscribe: { popup_text: "Confirmation d'inscription", backtoprofile_text: "Retour à Mon profil" },
    swissgerman_subscribe: { popup_text: "Bestätigung der Registrierung", backtoprofile_text: "Zurück zu «Mein Profil»" },
    manageuser: {
      default_text: " Pending Approvals ",
      search_text: "dev",
      reject_popup_text: "Reject Confirmation",
      reject_popup_select: "Not a valid-user",
      reject_popup_textarea: "Demo",
      reject_dropdown_select: "Filter by rejected users",
      approved_dropdown_select: "Filter by approved users",
      pending_dropdown_select: "Filter by pending users",
      rejected_mail: "cahngepwd1@mailinator.com",
      approved_mail: "signup-germantest2@mailinator.com",
      prev_rejected_popupmsg: "Rejected user informations",
      Technicaltitle:"Selected Categories",
      Technicalapprovealert:" The account[s] has been successfully approved."
    },
    deleteaccount:{
      delete_signin_email:"dev_technical_sleepdeviceuser@mailinator.com",
      delete_signin_pwd:"Welcome@01",
      deleteTitle:"Remove account",
      deletealerttitle:"Delete Account",
      delete_signin_alert:"Your account has been deactivated.",

    }
  },
};

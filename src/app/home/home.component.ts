import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imgPath1: string = "https://media.istockphoto.com/id/117147442/photo/medical-team-smiling.jpg?s=2048x2048&w=is&k=20&c=0ySmjAniEO7BmfQmDU95Yi0K1D3qFhm0WfAQQNy-lkQ=";
  imgPath2: string ="https://img.freepik.com/premium-photo/medicine-doctor-icon-health-care-virtual-interface-patients-come-hospital_34200-841.jpg?w=1380";
  imgPath3: string ="https://img.freepik.com/free-vector/multiple-sclerosis-concept-illustration_114360-8381.jpg?t=st=1741900331~exp=1741903931~hmac=44fb675760bc4921d3a926e34b105c0d09e3903c2a9cc921c05ba32de71b0c0d&w=826";
  imgPath4: string ="https://img.freepik.com/free-photo/good-health-message-board-with-green-apple-stethoscope-white-background_23-2147883739.jpg?t=st=1741898688~exp=1741902288~hmac=989978fae78937f6ae4745c70d8f4d6599c01554cc811fca69456cc871ab66aa&w=1380";
  imgPath5: string ="https://img.freepik.com/free-photo/close-up-doctor-holding-up-half-orange_23-2148302098.jpg?t=st=1741900469~exp=1741904069~hmac=a0a79ce25f64bb9860e037cb810169ce0043b8cdd47db9484d8a55817da9fa68&w=1380";
}
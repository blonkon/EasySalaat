import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-listutilisateur',
  templateUrl: './listutilisateur.component.html',
  styleUrls: ['./listutilisateur.component.scss'],
})
export class ListutilisateurComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  delete(){
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}

import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function matchPassword(): ValidatorFn{
	return (control:AbstractControl): ValidationErrors | null =>{
		const formGroup = control as FormGroup;
		const newPassword = formGroup.get('newPassword');
		const confirmPassword = formGroup.get('confirmPassword');
		if(newPassword?.value !== confirmPassword?.value)
			formGroup.setErrors({mismatch: true})
		return null;
	}
}

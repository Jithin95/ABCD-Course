function checkValidation() {
    semesterElement =  document.getElementById("sem");
    if (semesterElement.value == "selectsem") {
        semesterElement.classList.add("is-invalid");
        return false;
    } else {
        semesterElement.classList.remove("is-invalid");
        return true;
    }
}

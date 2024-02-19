public with sharing class Apex {
    public Apex() {

    }
    @AuraEnabled
    public static Void insertCadena(String cadena) {
        Account account = new Account(Name=cadena);
        insert account;
    }

    @AuraEnabled
    public static List<Account> getListCadenas(){
        try {
            Account[] accounts = [SELECT Name FROM Account];
            return accounts;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}
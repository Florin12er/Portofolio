---
title: "Klassen in JavaScript 🧐"
date: "2024-11-15"
tags: ["JavaScript", "Tutorial", "Webentwicklung", "OOP"]
image: "/images/classes.png"
---

# Was sind Klassen?

Klassen sind ein fundamentales Konzept in der objektorientierten Programmierung (OOP). Sie werden verwendet, um Objekte zu erstellen, die sowohl Daten als auch Verhalten besitzen.

In JavaScript werden Klassen verwendet, um Objekte zu erstellen, die sowohl Daten als auch Verhalten haben. Sie sind eine Möglichkeit, eine Blaupause für die Erstellung von Objekten zu definieren und dann mehrere Instanzen dieser Objekte zu erstellen.

# Wie erstellt man eine Klasse in JavaScript?

Um eine Klasse in JavaScript zu erstellen, verwendet man das Schlüsselwort **class**, gefolgt vom Namen der Klasse. Hier ein Beispiel:

```javascript
class Auto {
  constructor(marke, modell, baujahr) {
    this.marke = marke;
    this.modell = modell;
    this.baujahr = baujahr;
  }

  motorStarten() {
    console.log("Motor gestartet");
  }

  motorStoppen() {
    console.log("Motor gestoppt");
  }
}
```

In diesem Beispiel definieren wir eine Klasse namens **Auto** mit drei Eigenschaften: **marke**, **modell** und **baujahr**. Wir definieren auch zwei Methoden: **motorStarten** und **motorStoppen**.

Die **constructor**-Methode ist eine spezielle Methode, die aufgerufen wird, wenn eine neue Instanz der Klasse erstellt wird. Sie wird verwendet, um die Eigenschaften des Objekts zu initialisieren.

# Objekte mit dem **new** Schlüsselwort erstellen

Um ein Objekt aus einer Klasse zu erstellen, verwendet man das Schlüsselwort **new**, gefolgt vom Namen der Klasse und den vom Konstruktor benötigten Argumenten. Hier ein Beispiel:

```javascript
const meinAuto = new Auto("Toyota", "Camry", 2022);
```

In diesem Beispiel erstellen wir eine neue Instanz der **Auto**-Klasse mit der Marke "Toyota", dem Modell "Camry" und dem Baujahr 2022.

# Zugriff auf Eigenschaften und Methoden

Nachdem ein Objekt aus einer Klasse erstellt wurde, kann man mit der Punkt-Notation auf dessen Eigenschaften und Methoden zugreifen. Hier ein Beispiel:

```javascript
const meinAuto = new Auto("Toyota", "Camry", 2022);

console.log(meinAuto.marke); // Ausgabe: Toyota
console.log(meinAuto.modell); // Ausgabe: Camry
console.log(meinAuto.baujahr); // Ausgabe: 2022

meinAuto.motorStarten(); // Ausgabe: Motor gestartet
meinAuto.motorStoppen(); // Ausgabe: Motor gestoppt
```

# Statische Methoden

Statische Methoden sind Methoden, die auf der Klasse selbst aufgerufen werden, nicht auf einer Instanz der Klasse. Sie werden oft verwendet, um Operationen durchzuführen, die nicht spezifisch für eine bestimmte Instanz der Klasse sind.

Hier ein Beispiel einer statischen Methode:

```javascript
class Auto {
  constructor(marke, modell, baujahr) {
    this.marke = marke;
    this.modell = modell;
    this.baujahr = baujahr;
  }

  static alleAutosAbrufen() {
    return [
      new Auto("Toyota", "Camry", 2022),
      new Auto("Honda", "Civic", 2021),
    ];
  }
}
```

# Klassen erweitern

Man kann eine Klasse mit dem Schlüsselwort **extends** erweitern, gefolgt vom Namen der Klasse, die erweitert werden soll. Hier ein Beispiel:

```javascript
class ElektroAuto extends Auto {
  constructor(marke, modell, baujahr, batterieKapazitaet) {
    super(marke, modell, baujahr);
    this.batterieKapazitaet = batterieKapazitaet;
  }

  batterieLaden() {
    console.log("Batterie geladen");
  }
}
```

# Vererbung

Vererbung ist ein Schlüsselkonzept in der objektorientierten Programmierung, das es ermöglicht, eine neue Klasse basierend auf einer existierenden Klasse zu erstellen. Die neue Klasse, genannt Kind klasse oder Unterklasse, erbt die Eigenschaften und Methoden der Elternklasse, auch Superklasse genannt.

```javascript
class ElektroAuto extends Auto {
  constructor(marke, modell, baujahr, batterieKapazitaet) {
    super(marke, modell, baujahr);
    this.batterieKapazitaet = batterieKapazitaet;
  }

  batterieLaden() {
    console.log("Batterie geladen");
  }
}
```

# Polymorphismus

Polymorphismus ist ein Schlüsselkonzept in der objektorientierten Programmierung, das es ermöglicht, Objekte verschiedener Klassen als Objekte einer gemeinsamen Superklasse zu behandeln. Dies ermöglicht es, Code zu schreiben, der mit Objekten verschiedener Klassen arbeiten kann, ohne deren spezifische Typen zu kennen.

```javascript
const meinAuto = new Auto("Toyota", "Camry", 2022);
const meinElektroAuto = new ElektroAuto("Toyota", "Camry", 2022, 100);

if (meinAuto instanceof Auto) {
  console.log("Dies ist ein Auto");
}

if (meinElektroAuto instanceof Auto) {
  console.log("Dies ist ein Auto");
}

if (meinElektroAuto instanceof ElektroAuto) {
  console.log("Dies ist ein Elektroauto");
}
```

# Anwendungsfälle für Klassen

Klassen sind ein mächtiges Werkzeug in JavaScript, das für verschiedene Zwecke eingesetzt werden kann. Hier sind einige häufige Anwendungsfälle für Klassen:

- Erstellen von Objekten mit gemeinsamen Eigenschaften und Methoden
- Implementierung von Vererbung und Polymorphismus
- Erstellen wiederverwendbarer Komponenten mit gekapselten Daten und Verhalten
- Implementierung von Entwurfsmustern wie dem Singleton-Pattern
- Erstellen einer Blaupause für Objekte mit spezifischen Eigenschaften und Methoden

# Fazit

In diesem Artikel haben wir das Konzept der Klassen in JavaScript erkundet und gelernt, wie man Objekte mit gemeinsamen Eigenschaften und Methoden erstellt, Vererbung und Polymorphismus implementiert und Klassen für die Erstellung wiederverwendbarer Komponenten und Entwurfsmuster nutzt.

Danke fürs Lesen dieses Blogs, vergiss nicht ihn zu liken und mit deinen Freunden zu teilen! 😊

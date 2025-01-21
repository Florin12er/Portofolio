---
title: "Wörterbücher in Python 📚"
date: "2024-11-15"
tags: ["Python", "Tutorial", "Programmierung"]
image: "/images/dictionary.png"
---

# Was ist ein Wörterbuch in Python?

Ein Wörterbuch in Python ist eine eingebaute Datenstruktur, die Daten in Schlüssel-Wert-Paaren speichert, wobei jeder
Schlüssel einzigartig ist und auf einen bestimmten Wert verweist.
Sie können ein Wörterbuch erstellen, indem Sie Schlüssel-Wert-Paare in geschweifte Klammern {} einschließen.

```python
mein_dict = {
'schluessel1': 'wert1',
'schluessel2': 'wert2',
'schluessel3': 'wert3'
}
```

In diesem Beispiel haben wir ein Wörterbuch namens mein_dict mit drei Schlüssel-Wert-Paaren erstellt.
Die Schlüssel sind 'schluessel1', 'schluessel2' und 'schluessel3', und die entsprechenden Werte sind 'wert1', 'wert2'
und 'wert3'.

# Zugriff auf Werte in einem Wörterbuch

Um auf den Wert zuzugreifen, der mit einem bestimmten Schlüssel in einem Wörterbuch verbunden ist, können Sie die eckige
Klammer-Notation [] verwenden.

```python
print(mein_dict['schluessel1'])
```

Dies wird den Wert 'wert1' ausgeben.
Sie können auch die get()-Methode verwenden, um auf den Wert zuzugreifen, der mit einem Schlüssel verbunden ist. Wenn
der Schlüssel nicht existiert, gibt die get()-Methode None zurück

```python
print(mein_dict.get('schluessel4'))
```

Dies wird None ausgeben.

# Ändern von Werten in einem Wörterbuch

Um den Wert zu ändern, der mit einem Schlüssel in einem Wörterbuch verbunden ist, können Sie die eckige Klammer-Notation
[] verwenden und ihm einen neuen Wert zuweisen.

```python
mein_dict['schluessel1'] = 'neuer_wert'
print(mein_dict['schluessel1'])
```

Dies wird den Wert 'neuer_wert' ausgeben.

# Hinzufügen eines neuen Schlüssel-Wert-Paares

Um ein neues Schlüssel-Wert-Paar zu einem Wörterbuch hinzuzufügen, können Sie die eckige Klammer-Notation [] verwenden
und ihm einen neuen Wert zuweisen.

```python
mein_dict = {
'schluessel1': 'wert1',
'schluessel2': 'wert2',
'schluessel3': 'wert3'
}
```

Sie können auch die update()-Methode verwenden, um ein neues Schlüssel-Wert-Paar zu einem Wörterbuch hinzuzufügen.

```python
mein_dict.update({'schluessel4': 'wert4'})
print(mein_dict)
```

Dies wird ausgeben:

```python
{'schluessel1': 'wert1', 'schluessel2': 'wert2', 'schluessel3': 'wert3', 'schluessel4': 'wert4'}
```

# Löschen eines Schlüssel-Wert-Paares

Um ein Schlüssel-Wert-Paar aus einem Wörterbuch zu löschen, können Sie die pop()-Methode verwenden.

```python
mein_dict = {
'schluessel1': 'wert1',
'schluessel2': 'wert2',
'schluessel3': 'wert3'
}
print(mein_dict)
mein_dict.pop('schluessel2')
print(mein_dict)
```

Dies wird ausgeben:

```python
{'schluessel1': 'wert1', 'schluessel2': 'wert2', 'schluessel3': 'wert3'}
{'schluessel1': 'wert1', 'schluessel3': 'wert3'}
```

# Fazit

Wörterbücher sind eine leistungsfähige Datenstruktur in Python, die es Ihnen ermöglicht, Daten in Schlüssel-Wert-Paaren
zu speichern und zu manipulieren.
Indem Sie verstehen, wie Sie Schlüssel-Wert-Paare in einem Wörterbuch erstellen, darauf zugreifen, sie ändern,
hinzufügen und löschen können, können Sie effektiv mit Daten in Python arbeiten.
Vielen Dank, dass Sie diesen Blog gelesen haben. Vergessen Sie nicht, ihn zu liken und mit Ihren Freunden zu teilen! 😊

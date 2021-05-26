# Как обновлять forked repo
1. Для удобства можно установить оригинальный репозиторий в `upstream`: 
```git
git remote add upstream https://github.com/No-Max/cars.git
```

1. Если нужно сохранить изменения перед тем, как подтянуть последнюю версию, можно спихнуть все в ветку:

  ```git
  git checkout -b <название ветки>
  ```

  И отправить эту ветку на Github:
  ```git
  git push origin <название ветки>
  ```
  А затем переключиться обратно на `master`
  ```git 
  git checkout master
  ```

  Например 
  ```git
  git checkout -b myCarsLoaderImplementation

  git push origin myCarsLoaderImplementation

  git checkout master
  ```
1. Затем подтягиваем обновления из оригинального repo:

  ```git
  git fetch upstream
  ```
1. Если п.2 не делался, убедиться находимся в ветке `master`

  ```git
  git checkout master
  ```

1. Сделать `merge` из оригнального repo:
  ```git
  git merge -s recursive -X theirs upstream/master
  ```

1. Дальше работать как обычно
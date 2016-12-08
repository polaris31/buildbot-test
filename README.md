# buildbot-test

To push by polaris31 of buildbot-test repos:

    git push -u polaris31_buildbot_test master

Git変更でMasterが動きかけたが、何かの（たぶんGit）の起動に失敗してる模様だったので、
StaskOverFlowを参考にgit.exeのパスを追加してみた。

    changes.GitPoller(
        'https://github.com/polaris31/buildbot-test.git',
        workdir='gitpoller-workdir', branch='master',
        pollinterval=300)
    ↓
    changes.GitPoller(
        gitbin='C:\\Program Files\\Git\\mingw64\\bin\\git.exe',
        repourl='https://github.com/polaris31/buildbot-test.git',
        workdir='gitpoller-workdir', branch='master',
        pollinterval=300)
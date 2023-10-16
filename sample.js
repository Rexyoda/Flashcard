public class Main {

    public static void main(String[] args) {
        BufferedReader br = null; //テキストファイルを読み込むためのクラスを呼び出しておく
        String file_name = "src/com/company/fruitsWords.tsv"; //用意したtsvファイルのパスをString型に保存する

        final int MAX_DATA_NUMS = 50; //データの最大個数を決めておく必要がある（tsvファイルのデータ数に応じて変更する）

        String[][] data = new String[MAX_DATA_NUMS][]; //２次元配列を宣言する

        try { //以下配列にデータを格納する
            File file = new File(file_name); //ファイルを読み込むためのクラス
            br = new BufferedReader(new FileReader(file));  //FileReaderはテキストファイルを読むためのクラス

            int index = 0; //行番号を示す
            String line; //読み込んでいる行を都度格納する変数
            while ((line = br.readLine()) != null) { //読み込むべき次の行がなくなったらループを抜ける

                data[index] = line.split("\t"); //タブで分割し２次元配列に格納する
                index++; //次の行に移るためにindexを1増やす

            }
        } catch (Exception e) { //ファイル読み込みでエラーが起きたら通る部分

            System.out.println(e.getMessage()); //エラーメッセージを表示する

        } finally { //必ず通る部分（特に処理はなし）

        }
        //ここにモード選択、単語表示の処理を記述
    }
}


System.out.println("どのモードで学習するか選んでね！！！\na:ランダム日→英\nb:ランダム英→日");
Scanner modeScanner = new Scanner(System.in); //入力を受け取るScannerクラス
String modeInput = modeScanner.nextLine(); //入力を受け取った文字列をmodeInputという変数に格納する

int question = 0; //変数を宣言
int answer = 0; //変数を宣言

if(modeInput.equals("a")){ //モードaの場合

    question = 1;

} else if(modeInput.equals("b")){ //モードbの場合

    answer = 1;

} else { //「a」「b」以外の入力を受け取った時

    System.out.println("やる気ないんですね。");
    System.exit(0); //処理を強制終了させる

}

while (true) { //無限ループを構成する

    Random random = new Random(); //疑似乱数を生成するクラス
    int randomValue = random.nextInt(10); //0以上10未満の乱数
    Scanner enterInput = new Scanner(System.in); //enterの入力を受け取る
    System.out.println("Q: " + data[randomValue][question]); //問題となる値を表示する
    enterInput.nextLine(); //enterの入力待ち
    System.out.println("A: " + data[randomValue][answer] + "\n\n"); //答えとなる値を表示する

}

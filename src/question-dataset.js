export const multileChoices = [
  {
    conversations: [
      {
        from: "",
        to: "Cừu",
        content:
          "Hôm nay hãy cùng cừu lên mạng xã hội để xem có thông tin gì vui nhé!",
        decisionIdx: -1,
      },
      {
        from: "",
        to: "Cừu",
        content: "Ối có một người bạn nhắn tin cho Cừu nè!",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content: " Hi Cừu, ảnh đại diện của cậu dễ thương quá!",
        decisionIdx: -1,
      },
      {
        from: "Cừu",
        to: "Cừu",
        content: "Chào bạn, chúng mình đã gặp nhau chưa nhỉ?",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content: "Chúng mình học cùng trường đó, có lẽ Cừu không nhớ tớ rồi.",
        decisionIdx: -1,
      },
      {
        from: "Cừu",
        to: "Cừu",
        content: "Ra là chúng mình cùng trường, rất vui được làm quen với bạn!",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content: "Rất vui được làm quen với Cừu.",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content:
          "Cừu ơi, tớ đang tham gia hoạt động này của cô giáo giới thiệu. Lớp tớ có nhiều bạn tham gia lắm, Cừu có muốn tham gia không?",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content:
          "Ôi hoạt động gì vậy nhỉ? Có hoạt động hay mà tớ không biết sao?",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content:
          "Khi tham gia Cừu còn có cơ hội được nhận thưởng nữa đó, phần thưởng sẽ được gửi về trường.",
        decisionIdx: -1,
      },
      {
        from: "Bạn mới",
        to: "Cừu",
        content: "Tớ gửi link cuộc thi, Cừu quét rồi nghiên cứu tham gia nha!",
        decisionIdx: -1,
      },
      {
        from: "Cừu",
        to: "Cừu",
        content: "Hoạt động gì mà tớ không biết vậy nhỉ?",
        decisionIdx: 0,
      },
      // First action: send link
      {
        from: "annon",
        to: "sheep",
        content: "https://faceboook.net/login",
        decisionIdx: -1,
      },
      {
        from: "Cừu",
        to: "Cừu",
        content: "dasffdsf",
        attachment: "phishedsheep.png",
        decisionIdx: -1,
      },
      { from: "annon", to: "sheep", content: "", decisionIdx: 1 },
      // Second action: after link
      {
        from: "annon",
        to: "sheep",
        content: "Bạn ơi, tiếp tục cùng Cừu dạo mạng xã hội nhé!",
        decisionIdx: -1,
      },

      // TODO: noi xau co giao
      {
        from: "annon",
        to: "Cừu",
        content: "dasffdsf",
        attachment: "phishedsheep.png",
        decisionIdx: -1,
      },
      {
        from: "Cừu",
        to: "sheep",
        content:
          "Bạn nhỏ ơi Cừu sợ quá, tại sao lại có bài đăng này, đây không phải bài dăng do cừu làm đâu!",
        decisionIdx: -1,
      },
      {
        from: "Cừu",
        to: "sheep",
        content:
          "Bạn nhỏ ơi, Cừu xấu hổ quá, Cừu không biết phải làm gì, Cừu phải làm gì bây giờ?",
        decisionIdx: 2,
      },
      {
        from: "Teacher",
        to: "sheep",
        content: "",
        decisionIdx: 3,
      },
    ],
    decisions: [
      {
        avatar: "../src/assets/sheep.png",
        question: "Bạn nhỏ ơi, Cừu có nên đăng ký tham gia không?",
        answers: [
          {
            idxLetter: "A",
            answer: "Tất nhiên rồi, đây là bạn cùng trường mà!",
            state: -1, // 1 correct, -1 incorrect, 0 neutral
          },
          {
            idxLetter: "B",
            answer:
              "Nút hành động 2: Tớ nghĩ là Cừu cần thêm thông tin về cuộc thi này đó!",
            state: 1,
            jumpTo: -1, // -1 = jump to end conversation, X = jump to Xth conversation, leave empty = no jump
          },
        ],
      },
      {
        avatar: "../src/assets/sheep.png",
        question: "Bạn nhỏ ơi, hãy nhấn nộp đơn giúp Cừu nhé!",
        answers: [
          {
            idxLetter: "A",
            answer: "Nộp đơn",
            state: -1, // 1 correct, -1 incorrect, 0 neutral
          },
        ],
      },
      {
        avatar: "../src/assets/sheep.png",
        question:
          "Bạn nhỏ ơi, Cừu xấu hổ quá, Cừu không biết phải làm gì, Cừu phải làm gì bây giờ?",
        answers: [
          {
            idxLetter: "A",
            answer: "Báo phụ huynh",
            state: -1, // 1 correct, -1 incorrect, 0 neutral

            // TODO: jump to sol
            jumpTo: -1, // -1 = jump to end conversation, X = jump to Xth conversation, leave empty = no jump
          },
          {
            idxLetter: "A",
            answer: "Gọi tư vấn 111",
            state: -1, // 1 correct, -1 incorrect, 0 neutral
            // TODO: jump to sol
            jumpTo: -1, // -1 = jump to end conversation, X = jump to Xth conversation, leave empty = no jump
          },
          {
            idxLetter: "A",
            answer: "Báo cô giáo",
            state: -1, // 1 correct, -1 incorrect, 0 neutral
            // TODO: jump to sol
            jumpTo: -1, // -1 = jump to end conversation, X = jump to Xth conversation, leave empty = no jump
          },
          {
            idxLetter: "A",
            answer: "Báo cô giáo",
            state: -1, // 1 correct, -1 incorrect, 0 neutral
            // TODO: jump to sol
            jumpTo: -1, // -1 = jump to end conversation, X = jump to Xth conversation, leave empty = no jump
          },
        ],
      },
      {
        avatar: "../src/assets/teacher.png",
        question: `Cừu đang bị đăng tải thông tin sai sự thật bằng tài khoản của mình vì đã đăng nhập thông tin vào link không chính thống đó Cừu ơi! Con đừng sợ, để cô giúp con lý giải nhé!

Thứ nhất, danh tính của người bạn mới này! Con chưa biết cụ thể đây là ai, do vậy con không được hoàn toàn tin tưởng người ta như vậy nhé! 
=> Người xấu đã giả mạo danh tính để tiếp cận con

Thứ hai, con nhận một mã yêu cầu con cung cấp thông tin, con phải cẩn trọng nhé! Hình ảnh của con bị lộ là do những lần con cung cấp thông tin nhé vậy đấy!
=> Người xấu đã đánh cắp thông tin của con 
`,
        answers: [],
      },
    ],
  },
];

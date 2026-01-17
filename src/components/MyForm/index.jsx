import { Form, Input, Button, Space, Select, DatePicker } from "antd";
import { useForm, Controller, useWatch } from "react-hook-form";

import dayjs from "dayjs";

import style from "./index.module.css";

export const MyForm = ({ setActive, setData }) => {
  const formConfig = {
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "Man",
      birthday: dayjs("01/01/1996"),
      numberPhone: "",
    },
    mode: "onBlur",
  };

  const formRules = {
    username: {
      required: {
        value: true,
        message: "Username is required",
      },
      minLength: {
        value: 3,
        message: "Username must be at least 3 characters",
      },

      pattern: {
        value: /^[a-zA-Z]+$/,
        message: "Username can only contain letters",
      },
    },
    email: {
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email",
      },
    },
    password: {
      required: true,
      validate: (value) => {
        if (value.length < 6) {
          return "Password must be at least 6 characters";
        }
      },
    },
    confirmPassword: {
      required: true,
      validate: (value) => {
        return value === password || "Passwords do not match";
      },
    },
    birthday: {
      required: "Birthday is required",
    },
    numberPhone: {
      required: "Invalide number phone",
      validate: (value) => {
        if (!value) return "Phone number is required";
        if (value.length < 9) return "Invalid number";
        return true;
      },
    },
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(formConfig);

  const password = useWatch({ control, name: "password" });

  const submit = (data) => {
    setActive(true);
    setData(JSON.stringify(data));
    reset();
  };

  return (
    <div className={style.mainContainer}>
      <h1>Регистрация</h1>
      <Form
        layout="vertical"
        name="basic"
        onFinish={handleSubmit(submit)}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          label="Username"
          required
          validateStatus={errors.username ? "error" : ""}
          help={errors.username?.message}
        >
          <Controller
            control={control}
            name="username"
            rules={formRules.username}
            render={({ field }) => <Input placeholder="username" {...field} />}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          required
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            control={control}
            name="email"
            rules={formRules.email}
            render={({ field }) => <Input placeholder="email" {...field} />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          required
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            control={control}
            name="password"
            rules={formRules.password}
            render={({ field }) => (
              <Input.Password placeholder="password" {...field} />
            )}
          />
        </Form.Item>
        <Form.Item
          label="Confirm password"
          required
          name="confirmPassword"
          validateStatus={errors.confirmPassword ? "error" : ""}
          help={errors.confirmPassword?.message}
        >
          <Controller
            control={control}
            name="confirmPassword"
            rules={formRules.confirmPassword}
            render={({ field }) => (
              <Input.Password placeholder="confirm password" {...field} />
            )}
          />
        </Form.Item>
        <Form.Item
          label="Birthday"
          required
          validateStatus={errors.birthday ? "error" : ""}
          help={errors.birthday?.message}
        >
          <Controller
            control={control}
            name="birthday"
            rules={formRules.birthday}
            render={({ field }) => (
              <DatePicker format={"DD/MM/YYYY"} {...field} />
            )}
          />
        </Form.Item>
        <Form.Item label="Gender" required>
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "Man", label: "Man" },
                  { value: "Women", label: "Women" },
                ]}
              />
            )}
          />
        </Form.Item>
        <Form.Item
          label="Number phone"
          required
          name="numberPhone"
          validateStatus={errors.numberPhone ? "error" : ""}
          help={errors.numberPhone?.message}
        >
          <Controller
            required
            control={control}
            name="numberPhone"
            rules={formRules.numberPhone}
            render={({ field }) => (
              <Space.Compact>
                <Input readOnly style={{ width: "20%" }} defaultValue="+375" />
                <Input
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    field.onChange(value);
                  }}
                  style={{ width: "80%" }}
                />
              </Space.Compact>
            )}
          />
        </Form.Item>

        <Button htmlType="submit">Зарегестрироваться</Button>
      </Form>
    </div>
  );
};

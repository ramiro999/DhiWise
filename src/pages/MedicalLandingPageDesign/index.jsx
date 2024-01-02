import React from "react";

import { Button, Img, Input, Line, RatingBar, Text } from "components";

const MedicalLandingPageDesignPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ibmplexsans sm:gap-10 md:gap-10 gap-[150px] items-center justify-end mx-auto w-full">
        <div className="h-[1407px] md:h-[870px] md:px-5 relative w-full">
          <Text
            className="ml-[120px] mt-[49px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtIBMPlexSansBold32"
          >
            <span className="text-gray-900 font-ibmplexsans text-left font-bold">
              Pro-
            </span>
            <span className="text-blue-800 font-ibmplexsans text-left font-bold">
              Health
            </span>
          </Text>
          <div className="absolute h-[1407px] md:h-[870px] inset-[0] justify-center m-auto w-full">
            <div className="absolute bottom-[0] h-[1336px] md:h-[800px] inset-x-[0] mx-auto w-full">
              <div className="absolute md:h-[800px] h-[907px] inset-x-[0] mx-auto top-[13%] w-full">
                <div className="absolute bg-blue-200 bottom-[0] h-[800px] right-[0] rotate-[180deg] rounded-[50%] w-[800px]"></div>
                <Text
                  className="absolute left-[8%] md:text-5xl text-[64px] text-black-900 top-[0]"
                  size="txtIBMPlexSansMedium64"
                >
                  <span className="text-gray-900 font-ibmplexsans text-left font-bold">
                    <>
                      Busca y Encuentra
                      <br />
                    </>
                  </span>
                  <span className="text-black-900 font-ibmplexsans text-left font-bold">
                    de manera
                  </span>
                  <span className="text-blue-800 font-ibmplexsans text-left font-bold">
                    {" "}
                    Oportuna
                  </span>
                  <span className="text-black-900 font-ibmplexsans text-left font-bold">
                    {" "}
                  </span>
                </Text>
                <Text
                  className="absolute left-[8%] text-base text-blue_gray-900_01 top-[20%] w-[30%] sm:w-full"
                  size="txtIBMPlexSansRegular16"
                >
                  <span className="text-blue_gray-900_01 font-ibmplexsans text-left font-normal">
                    Comprometidos con tu{" "}
                  </span>
                  <span className="text-blue_gray-900_01 font-ibmplexsans text-left font-bold">
                    salud{" "}
                  </span>
                  <span className="text-blue_gray-900_01 font-ibmplexsans text-left font-normal">
                    y{" "}
                  </span>
                  <span className="text-blue_gray-900_01 font-ibmplexsans text-left font-bold">
                    bienestar
                  </span>
                  <span className="text-blue_gray-900_01 font-ibmplexsans text-left font-normal">
                    , ofrecemos{" "}
                  </span>
                  <span className="text-blue_gray-900_01 font-ibmplexsans text-left font-bold">
                    atención médica de calidad
                  </span>
                  <span className="text-blue_gray-900_01 font-ibmplexsans text-left font-normal">
                    {" "}
                    con un enfoque{" "}
                  </span>
                  <span className="text-blue_gray-900_01 font-ibmplexsans text-left font-bold">
                    humano
                  </span>
                  <span className="text-blue_gray-900_01 font-ibmplexsans text-left font-normal">
                    .
                  </span>
                </Text>
                <div className="absolute bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-start justify-end left-[8%] p-[7px] rounded-[36px] top-[34%] w-[41%]">
                  <Img
                    className="h-4 sm:mt-0 mt-[23px] w-4"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                  <Text
                    className="ml-2.5 sm:ml-[0] sm:mt-0 mt-[21px] text-base text-black-900"
                    size="txtIBMPlexSansRegular16Black900"
                  >
                    Elige un tipo de cita
                  </Text>
                  <Img
                    className="h-1 sm:ml-[0] ml-[9px] sm:mt-0 mt-[29px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <div className="bg-black-900 flex flex-col h-4 items-center justify-start mb-5 sm:ml-[0] ml-[88px] sm:mt-0 mt-[23px] p-1 rounded-[50%] w-4">
                    <Img
                      className="h-2"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                  </div>
                  <div className="flex ml-2.5 sm:ml-[0] sm:mt-0 mt-[19px] relative w-[14%] sm:w-full">
                    <Text
                      className="my-auto text-base text-black-900"
                      size="txtIBMPlexSansRegular16Black900"
                    >
                      Ubicación
                    </Text>
                    <Img
                      className="h-1 mb-[7px] ml-[-0.57px] mt-auto z-[1]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown_One"
                    />
                  </div>
                  <Button
                    className="flex h-14 items-center justify-center sm:ml-[0] ml-[114px] mr-0.5 sm:mt-0 mt-[3px] w-14"
                    color="blue_800"
                  >
                    <Img
                      className="h-4"
                      src="images/img_search_white_a700.svg"
                      alt="search"
                    />
                  </Button>
                </div>
                <div className="absolute bg-blue-800 bottom-[31%] flex flex-row gap-[42px] inset-x-[0] items-center justify-start mx-auto p-[13px] w-full">
                  <div className="flex flex-col items-center justify-start ml-[106px] mt-[5px]">
                    <Text
                      className="md:text-5xl text-[64px] text-white-A700"
                      size="txtIBMPlexSansBold64"
                    >
                      24/7
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtIBMPlexSansRegular16WhiteA700"
                    >
                      Soporte en linea
                    </Text>
                  </div>
                  <Line className="bg-white-A700 h-[79px] my-[13px] w-px" />
                </div>
              </div>
              <Text
                className="absolute bottom-[24%] left-[8%] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900"
                size="txtIBMPlexSansBold48"
              >
                Nuestras Especialidades:
              </Text>
              <div className="absolute bg-blue-800 bottom-[0] flex flex-col h-[285px] items-start justify-center left-[30%] p-4 rounded-[20px] w-[285px]">
                <div className="bg-blue-50 flex flex-col h-[92px] items-center justify-start ml-3 md:ml-[0] mt-[7px] p-6 sm:px-5 rounded-[50%] w-[92px]">
                  <Img
                    className="h-[39px] my-0.5"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                </div>
                <Text
                  className="ml-3 md:ml-[0] mt-2.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtIBMPlexSansBold24"
                >
                  Cardiorespiratorio
                </Text>
                <Text
                  className="mb-[50px] ml-3 md:ml-[0] text-base text-white-A700 w-[96%] sm:w-full"
                  size="txtIBMPlexSansRegular16WhiteA700"
                >
                  El estado de bienestar de corazón y pulmones, esencial para
                  una vida activa y libre de problemas cardiovasculares y
                  respiratorios.
                </Text>
              </div>
              <div className="absolute bottom-[4%] flex flex-col gap-[7px] items-start justify-start left-[10%]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtIBMPlexSansBold24Gray900"
                >
                  Prueba Covid-19
                </Text>
                <Text
                  className="text-base text-blue_gray-900_02 w-full"
                  size="txtIBMPlexSansRegular16Bluegray90002"
                >
                  Un análisis para detectar el virus COVID-19 en muestras
                  respiratorias, fundamental para el diagnóstico y control de la
                  enfermedad.
                </Text>
              </div>
              <div className="absolute border border-gray-900 border-solid bottom-[0] flex flex-col h-[285px] items-start justify-start left-[8%] p-[29px] sm:px-5 rounded-[20px] w-[285px]">
                <div className="bg-blue-50 flex flex-col h-[92px] items-center justify-end mb-[133px] mt-0.5 p-[23px] sm:px-5 rounded-[50%] w-[92px]">
                  <Img
                    className="h-[45px] w-[45px]"
                    src="images/img_search.svg"
                    alt="search_One"
                  />
                </div>
              </div>
              <div className="absolute bottom-[4%] flex flex-col items-start justify-start right-[31%]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtIBMPlexSansBold24Gray900"
                >
                  Suplementos
                </Text>
                <Text
                  className="mt-1 text-base text-blue_gray-900_02 w-full"
                  size="txtIBMPlexSansRegular16Bluegray90002"
                >
                  Productos que contienen nutrientes adicionales, tomados para
                  complementar la dieta regular y apoyar la salud.
                </Text>
              </div>
              <div className="absolute border border-gray-900 border-solid bottom-[0] flex flex-col h-[285px] items-start justify-start p-[23px] sm:px-5 right-[30%] rounded-[20px] w-[285px]">
                <div className="bg-blue-50 flex flex-col h-[92px] items-center justify-start mb-[147px] md:ml-[0] ml-[5px] p-[23px] sm:px-5 rounded-[50%] w-[92px]">
                  <Img
                    className="h-[43px] mb-[3px]"
                    src="images/img_vector_blue_800.svg"
                    alt="vector_One"
                  />
                </div>
              </div>
              <div className="absolute bottom-[4%] flex flex-col items-start justify-start right-[8%]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtIBMPlexSansBold24Gray900"
                >
                  Salud Mental
                </Text>
                <Text
                  className="text-base text-blue_gray-900_02 w-full"
                  size="txtIBMPlexSansRegular16Bluegray90002"
                >
                  El bienestar emocional y psicológico, vital para una vida
                  equilibrada y satisfactoria, que incluye la prevención y
                  tratamiento de trastornos mentales.
                </Text>
              </div>
              <div className="absolute border border-gray-900 border-solid bottom-[0] flex flex-col h-[285px] items-start justify-start p-[23px] sm:px-5 right-[8%] rounded-[20px] w-[285px]">
                <div className="bg-blue-50 flex flex-col h-[92px] items-center justify-end mb-[147px] md:ml-[0] ml-[3px] p-[26px] sm:px-5 rounded-[50%] w-[92px]">
                  <Img
                    className="h-[37px] mt-[3px]"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[30px] left-[8%] top-[24%]"
                src="images/img_vector5.svg"
                alt="vectorFive"
              />
              <div className="absolute h-[799px] right-[0] top-[0] w-[68%] md:w-full">
                <Img
                  className="h-[799px] m-auto object-cover w-full"
                  src="images/img_unsplashsakqlf78kvo.png"
                  alt="unsplashsakqlfSeven"
                />
                <div className="absolute bottom-[2%] flex flex-row gap-[46px] items-center justify-center left-[9%] w-[19%]">
                  <Line className="bg-white-A700 h-[79px] my-[11px] w-px" />
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="md:text-5xl text-[64px] text-white-A700"
                      size="txtIBMPlexSansBold64"
                    >
                      1M+
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtIBMPlexSansRegular16WhiteA700"
                    >
                      Active Patients
                    </Text>
                  </div>
                </div>
                <div className="absolute bg-white-A700 bottom-[0] h-[758px] right-[15%] w-[44%]"></div>
              </div>
            </div>
            <div className="absolute bottom-[39%] flex flex-col items-center justify-start left-1/4">
              <Text
                className="md:text-5xl text-[64px] text-white-A700"
                size="txtIBMPlexSansBold64"
              >
                100+
              </Text>
              <Text
                className="text-base text-white-A700"
                size="txtIBMPlexSansRegular16WhiteA700"
              >
                Doctors
              </Text>
            </div>
            <Img
              className="absolute h-[870px] object-cover right-[0] top-[0] w-[65%]"
              src="images/img_1348b69074934.png"
              alt="1348b69074934"
            />
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[150px] justify-end w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start md:ml-[0] ml-[120px] mr-[220px] md:px-5 w-[77%] md:w-full">
            <Img
              className="h-[306px] sm:h-auto object-cover rounded-[20px] w-[49%] md:w-full"
              src="images/img_rectangle11.png"
              alt="rectangleEleven"
            />
            <div className="flex flex-col items-start justify-start w-[45%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900"
                size="txtIBMPlexSansBold48"
              >
                ¿Por qué escogernos?
              </Text>
              <div className="flex flex-row gap-[15px] items-start justify-start mt-[29px] w-3/5 md:w-full">
                <Img
                  className="h-4 w-4"
                  src="images/img_emojionemonoto.svg"
                  alt="emojionemonoto"
                />
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtIBMPlexSansRegular16Bluegray900"
                >
                  Profesionales altamente calificados.
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-start justify-start mt-[11px] w-[62%] md:w-full">
                <Img
                  className="h-4 mt-[3px] w-4"
                  src="images/img_emojionemonoto.svg"
                  alt="emojionemonoto_One"
                />
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtIBMPlexSansRegular16Bluegray900"
                >
                  Enfoque personalizado en la atención.
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-start justify-start mt-[11px] w-[58%] md:w-full">
                <Img
                  className="h-4 mt-[3px] w-4"
                  src="images/img_emojionemonoto.svg"
                  alt="emojionemonoto_Two"
                />
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtIBMPlexSansRegular16Bluegray900"
                >
                  Excelente reputación y referencias.
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-start justify-start mt-[13px] w-[58%] md:w-full">
                <Img
                  className="h-4 mt-[3px] w-4"
                  src="images/img_emojionemonoto.svg"
                  alt="emojionemonoto_Three"
                />
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtIBMPlexSansRegular16Bluegray900"
                >
                  Amplia gama de servicios médicos.
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-start mt-[13px] w-[72%] md:w-full">
                <Img
                  className="h-4 w-4"
                  src="images/img_emojionemonoto.svg"
                  alt="emojionemonoto_Four"
                />
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtIBMPlexSansRegular16Bluegray900"
                >
                  Cumplimiento con normativas de privacidad.
                </Text>
              </div>
              <div className="flex flex-row gap-6 items-center justify-start mt-8 w-[21%] md:w-full">
                <Text
                  className="text-base text-blue-800"
                  size="txtIBMPlexSansMedium16"
                >
                  Leer mas
                </Text>
                <Img
                  className="h-2.5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-blue-50_01 flex flex-col items-center justify-start p-[118px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1200px] mb-[37px] mx-auto w-full">
                <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start mb-[31px] w-[43%] md:w-full">
                  <div className="md:h-[187px] h-[226px] relative w-full">
                    <Text
                      className="absolute inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 top-[0]"
                      size="txtIBMPlexSansBold48"
                    >
                      <span className="text-gray-900 font-ibmplexsans text-left font-bold">
                        <>
                          ¿Que dicen
                          <br />
                        </>
                      </span>
                      <span className="text-blue-800 font-ibmplexsans text-left font-bold">
                        <>
                          Nuestros miembros
                          <br />
                        </>
                      </span>
                      <span className="text-gray-900 font-ibmplexsans text-left font-bold">
                        de nosotros?
                      </span>
                    </Text>
                    <Text
                      className="absolute bottom-[0] left-[0] text-base text-blue_gray-900 w-[83%] sm:w-full"
                      size="txtIBMPlexSansRegular16Bluegray900"
                    >
                      Aqui estan las reseñas mas recientes de nuestros clientes
                      actuales.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[27px] items-center justify-start w-[71%] md:w-full">
                    <div className="flex relative w-[64%]">
                      <div className="flex my-auto w-[85%]">
                        <div className="flex my-auto w-[82%]">
                          <div className="flex my-auto w-[79%]">
                            <div className="flex my-auto w-[72%]">
                              <Img
                                className="h-[52px] my-auto rounded-[50%] w-[52px]"
                                src="images/img_ellipse7.png"
                                alt="ellipseSeven"
                              />
                              <Img
                                className="h-[52px] ml-[-18px] my-auto rounded-[50%] w-[53px] z-[1]"
                                src="images/img_ellipse8.png"
                                alt="ellipseEight"
                              />
                            </div>
                            <Img
                              className="h-[52px] ml-[-18px] my-auto rounded-[50%] w-[52px] z-[1]"
                              src="images/img_ellipse9.png"
                              alt="ellipseNine"
                            />
                          </div>
                          <Img
                            className="h-[52px] ml-[-18px] my-auto rounded-[50%] w-[52px] z-[1]"
                            src="images/img_ellipse10.png"
                            alt="ellipseTen"
                          />
                        </div>
                        <Img
                          className="h-[52px] ml-[-18px] my-auto rounded-[50%] w-[53px] z-[1]"
                          src="images/img_ellipse11.png"
                          alt="ellipseEleven"
                        />
                      </div>
                      <Img
                        className="h-[52px] ml-[-18px] my-auto rounded-[50%] w-[52px] z-[1]"
                        src="images/img_ellipse12.png"
                        alt="ellipseTwelve"
                      />
                    </div>
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtIBMPlexSansSemiBold16"
                    >
                      100+ Reviews
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-500 border-solid flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[38px] p-11 md:px-10 sm:px-5 rounded-[20px] w-1/2 md:w-full">
                  <div className="flex flex-col gap-[45px] items-center justify-start mb-[52px] mt-[5px] w-[99%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                      <Img
                        className="h-[52px] md:h-auto rounded-[50%] w-[52px]"
                        src="images/img_ellipse10.png"
                        alt="ellipseThirteen"
                      />
                      <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[18px]">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtIBMPlexSansSemiBold16"
                        >
                          Jane Cooper
                        </Text>
                        <Text
                          className="mt-0.5 text-blue_gray-900 text-xs"
                          size="txtIBMPlexSansRegular12"
                        >
                          12/4/17
                        </Text>
                      </div>
                      <RatingBar
                        className="flex justify-between sm:ml-[0] ml-[130px] w-[200px]"
                        value={5}
                        starCount={5}
                        activeColor="#f5bf00"
                        size={40}
                      ></RatingBar>
                    </div>
                    <Text
                      className="text-base text-blue_gray-900 w-full"
                      size="txtIBMPlexSansRegular16Bluegray900"
                    >
                      <>
                        &quot;Este consultorio médico es excelente. El equipo es
                        profesional, amable y atento. Ofrecen atención médica de
                        calidad en un entorno limpio y acogedor. ¡Muy
                        recomendado!&quot;
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-8 items-center justify-start max-w-[1204px] mt-[150px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[43%] md:w-full">
                <Text
                  className="ml-1 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-blue-800"
                  size="txtIBMPlexSansBold48Blue800"
                >
                  <>
                    El futuro de la
                    <br />
                    Salud de Calidad
                  </>
                </Text>
                <Text
                  className="ml-1 md:ml-[0] text-base text-blue_gray-900 w-[97%] sm:w-full"
                  size="txtIBMPlexSansRegular16Bluegray900"
                >
                  Nuestro consultorio es el estándar de excelencia en atención
                  médica. Nos enorgullece contar con un equipo de médicos
                  altamente calificados que ofrecen una atención médica de
                  primera calidad respaldada por años de experiencia y formación
                  avanzada.
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-2.5 text-base text-blue_gray-900 w-[93%] sm:w-full"
                  size="txtIBMPlexSansRegular16Bluegray900"
                >
                  Nuestro compromiso con la innovación médica se refleja en el
                  uso de tecnología de vanguardia para diagnósticos precisos y
                  tratamientos efectivos.
                </Text>
                <Text
                  className="ml-1 md:ml-[0] mt-[7px] text-base text-blue_gray-900 w-[93%] sm:w-full"
                  size="txtIBMPlexSansRegular16Bluegray900"
                >
                  Además, nos destacamos por nuestro enfoque centrado en el
                  paciente, donde cada individuo recibe atención personalizada y
                  compasiva. Estamos dedicados a elevar los estándares de
                  atención médica y a brindar a nuestros pacientes el más alto
                  nivel de cuidado para mantener y mejorar su salud en todo
                  momento.
                </Text>
                <div className="flex flex-row gap-[27px] items-start justify-start mt-[5px] w-[21%] md:w-full">
                  <Text
                    className="text-base text-blue-800"
                    size="txtIBMPlexSansMedium16"
                  >
                    Leer mas
                  </Text>
                  <Img
                    className="h-2.5 mt-1"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft_One"
                  />
                </div>
              </div>
              <Img
                className="md:flex-1 h-[460px] sm:h-auto object-cover rounded-[20px] w-[56%] md:w-full"
                src="images/img_rectangle15.png"
                alt="rectangleFifteen"
              />
            </div>
            <div className="bg-blue-800 flex flex-col items-center justify-start max-w-[1200px] mt-[146px] mx-auto p-[27px] md:px-5 rounded-[41px] w-full">
              <div className="flex flex-col gap-10 items-center justify-start mb-0.5 w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtIBMPlexSansSemiBold40"
                >
                  ¡Dejanos contactarte!
                </Text>
                <div className="flex flex-col font-inter items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[91%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                      size="txtInterBold24"
                    >
                      Nombres:
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[222px] md:mt-0 mt-[3px] text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                      size="txtInterBold22"
                    >
                      Apellidos:
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[207px] text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                      size="txtInterBold22"
                    >
                      Celular:
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[207px] text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.44px]"
                      size="txtInterBold22"
                    >
                      Correo:
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[17px] w-full">
                    <div className="bg-blue_gray-50 h-12 rounded-[12px] w-[17%]"></div>
                    <Input
                      name="rectangleNineteen"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex sm:flex-1 h-12 ml-36 sm:ml-[0] w-[17%] sm:w-full"
                    ></Input>
                    <Input
                      name="rectangleTwenty"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex sm:flex-1 h-12 sm:ml-[0] ml-[131px] w-[17%] sm:w-full"
                    ></Input>
                    <Input
                      name="rectangleTwentyOne"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="flex sm:flex-1 h-12 sm:ml-[0] ml-[108px] w-[17%] sm:w-full"
                    ></Input>
                  </div>
                  <Button
                    className="flex h-14 items-center justify-center md:ml-[0] ml-[1085px] mt-[54px] w-14"
                    color="gray_900_01"
                    size="xs"
                  >
                    <Img
                      src="images/img_arrowleft_white_a700.svg"
                      alt="arrowleft_Two"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <Img
              className="h-[111px] md:h-auto mt-[27px] object-cover w-[111px]"
              src="images/img_image1_111x111.png"
              alt="imageOne"
            />
            <footer className="bg-blue-800 flex items-center justify-center mt-[41px] md:px-5 w-full">
              <div className="flex flex-col items-center justify-center mb-[41px] ml-[103px] mr-[119px] mt-11 w-[85%]">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[43%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtIBMPlexSansSemiBold24"
                      >
                        Pro-Health
                      </Text>
                      <Text
                        className="text-base text-white-A700 w-full"
                        size="txtIBMPlexSansRegular16WhiteA700"
                      >
                        <>
                          &quot;Nuestro consultorio médico es un centro de
                          atención de salud de confianza dedicado a proporcionar
                          atención médica de calidad a individuos y familias.
                          Nuestra misión es proporcionar atención médica
                          compasiva, personalizada y basada en la evidencia para
                          ayudar a nuestros pacientes a mantener y mejorar su
                          salud a lo largo de sus vidas. Valoramos la comodidad
                          y la confianza de nuestros pacientes, y nos esforzamos
                          por crear un entorno acogedor y seguro para cada
                          visita. En nuestro consultorio, tu salud es nuestra
                          prioridad número uno.&quot;
                        </>
                      </Text>
                      <Img
                        className="h-4 md:ml-[0] ml-[17px] mt-1"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-8 items-start justify-start mb-[57px] md:ml-[0] ml-[35px] md:mt-0 mt-4 w-[9%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtIBMPlexSansSemiBold24"
                      >
                        Enlaces
                      </Text>
                      <ul className="flex flex-col h-[102px] items-start justify-start w-[102px] common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="text-base text-white-A700"
                          >
                            <Text size="txtIBMPlexSansMedium16WhiteA700">
                              About Us
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-[7px] text-base text-white-A700"
                          >
                            <Text size="txtIBMPlexSansMedium16WhiteA700">
                              Privacy Policy
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-1 text-base text-white-A700"
                          >
                            <Text size="txtIBMPlexSansMedium16WhiteA700">
                              Our Mission
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mt-1.5 text-base text-white-A700"
                          >
                            <Text size="txtIBMPlexSansMedium16WhiteA700">
                              Our Team
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-8 items-start justify-start md:ml-[0] ml-[200px] md:mt-0 mt-[15px] w-[31%] md:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtIBMPlexSansSemiBold24"
                      >
                        Dirección
                      </Text>
                      <Img
                        className="h-40 sm:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                        src="images/img_rectangle18.png"
                        alt="rectangleEighteen"
                      />
                    </div>
                  </div>
                  <Line className="bg-white-A700 h-px mt-[79px] w-[99%]" />
                  <div className="flex flex-col items-center justify-start mr-[470px] mt-[23px]">
                    <Text
                      className="text-base text-center text-white-A700"
                      size="txtIBMPlexSansRegular16WhiteA700"
                    >
                      Hecho con ❤️ por NWS Group
                    </Text>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalLandingPageDesignPage;

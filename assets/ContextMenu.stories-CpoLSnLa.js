import{a7 as t}from"./iframe-DE6S9aZ4.js";import{S as b}from"./ArrowRedo-DnroCoyD.js";import{S as v}from"./EyeClosed-N2i5_n_e.js";import{S as I}from"./Archive-vICIit_T.js";import{S as k}from"./Trash-DzwQmE5W.js";import{S as w}from"./ClockDashed-CIHM6whj.js";import{C as n}from"./ContextMenu-OB_xrmDU.js";import{i as l}from"./inboxSearchResults-C33p_AGN.js";import{S as u}from"./TeddyBear-B0Ja4RMS.js";import{L as x}from"./List-BtKbJRMJ.js";import{D as d}from"./DialogListItem-CadXPtmg.js";import{L as g}from"./ListItem-DYxFGUfM.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DjzmpwyV.js";import"./Dropdown-CtTBKP-C.js";import"./SearchField-DLpVp_NL.js";import"./MagnifyingGlass-Cw9dgxbo.js";import"./FieldBase-Dqt8MJKx.js";import"./Typography-Cfn_aMgf.js";import"./useHighlightedText-C20f3R5e.js";import"./Field-CqVl0h_R.js";import"./Label-MWSbEF7h.js";import"./Input-DHBuxbkq.js";import"./useMenu-BnFUnl7r.js";import"./MenuListItem-CLQjAJhf.js";import"./MenuListDivider-TgKUiY6a.js";import"./MenuListHeading-C_U_JJdE.js";import"./MenuItem-DIQqnyL7.js";import"./ItemMedia-CpnAVdfr.js";import"./Avatar-CNN7KBYB.js";import"./AvatarGroup-kG5dzOiP.js";import"./Checkmark-DE4sJMpI.js";import"./ItemLabel-BuYlysP4.js";import"./Heading-BDklncvD.js";import"./ItemControls-BOAqxChM.js";import"./Badge-BKORQsmw.js";import"./Tooltip-B3xZNbnc.js";import"./ChevronRight-CaR2K8Z7.js";import"./InformationSquare-BoTINEEI.js";import"./MenuElipsisHorizontal-BBzbVmNF.js";import"./dialogs-a4pcghx7.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-YrEztafE.js";import"./AttachmentList-DD61bDoB.js";import"./AttachmentLink-Dveny5Is.js";import"./File-CayFuwBh.js";import"./Section-y38TddTh.js";import"./Flex-DAi1mqH2.js";import"./TransmissionList-Dte4BzzM.js";import"./Transmission-DPr2cduY.js";import"./SeenByLog-DoDuFR_h.js";import"./SeenByLogItem-BUgRIVP4.js";import"./Byline-DWlUTVPr.js";import"./SeenByLogButton-9dHZRQO_.js";import"./Divider-CaMZ1Hz3.js";import"./DialogActions-BtnpT7CZ.js";import"./ButtonGroupDivider-po33QuJn.js";import"./ChevronUp-DiUn2hCV.js";import"./ChevronDown-BW8AfmI4.js";import"./DropdownBase-CvY60dRX.js";import"./useClickOutside-BOpjIHkM.js";import"./ButtonGroup-DMo1vjo2.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-LlpdCdPt.js";import"./ItemLink-BOsA1UC5.js";import"./DialogByline-gpiT7BsW.js";import"./DialogMetadata-Dg8IFELo.js";import"./DialogStatus-CuNY4AR2.js";import"./Paperclip-C68VP6sp.js";import"./Files-D4XkHp7c.js";import"./MetaBase-TgdStLyi.js";import"./MetaItem-GzMbHVHO.js";import"./ProgressIcon-r_HIGon2.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};

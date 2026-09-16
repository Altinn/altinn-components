import{a7 as t}from"./iframe-C-THn91T.js";import{S as b}from"./ArrowRedo-CYjdF0tR.js";import{S as v}from"./EyeClosed-CsraeFMS.js";import{S as I}from"./Archive-ZlzcxLiS.js";import{S as k}from"./Trash-Bge9W0Oj.js";import{S as w}from"./ClockDashed-Couf_uxd.js";import{C as n}from"./ContextMenu-B70W48kK.js";import{i as l}from"./inboxSearchResults-DnlzaAZP.js";import{S as u}from"./TeddyBear-CRGtEmQ1.js";import{L as x}from"./List-DbCJKu2j.js";import{D as d}from"./DialogListItem-CemFSH3w.js";import{L as g}from"./ListItem-B9SpvPEq.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CYkklUYZ.js";import"./Dropdown-DGlWBLGp.js";import"./SearchField-3MMOEmrN.js";import"./MagnifyingGlass-DcHLZgKH.js";import"./FieldBase-3tu8AQku.js";import"./Typography-BHSdNY0l.js";import"./useHighlightedText-LohBehUX.js";import"./Field-BN4IysmT.js";import"./Label-Cj2m8vPc.js";import"./Input-DSL2dtsJ.js";import"./useMenu-CEKxQFuP.js";import"./MenuListItem-BtLexDfB.js";import"./MenuListDivider-C2y_tXgh.js";import"./MenuListHeading-Djui1q9T.js";import"./MenuItem-B98ufrdD.js";import"./ItemMedia-DiPL1djx.js";import"./Avatar-CLhHIcAr.js";import"./AvatarGroup-FJy6c_cG.js";import"./Checkmark-CKSWNkLN.js";import"./ItemLabel-DD7gOu3Q.js";import"./Heading-Bt4tEn1t.js";import"./ItemControls-AJskvBhb.js";import"./Badge-lAjlx4fW.js";import"./Tooltip-DrV4DRir.js";import"./ChevronRight-SDiRgKYv.js";import"./InformationSquare-DjaHtlyP.js";import"./MenuElipsisHorizontal-eJprcIlu.js";import"./dialogs-CfV_4ODd.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CFCTVq9o.js";import"./AttachmentList-r3nDJqQA.js";import"./AttachmentLink-CgUX457-.js";import"./File-BtXZmv7k.js";import"./Section-BoYAWl0A.js";import"./Flex-C1ZLhAqe.js";import"./TransmissionList-BkP4z5Vg.js";import"./Transmission-C_MCyETc.js";import"./SeenByLog-DqDb8Xha.js";import"./SeenByLogItem-Bltnm8yQ.js";import"./Byline-DObVcopJ.js";import"./SeenByLogButton-DrzsGCZo.js";import"./Divider-C3OXLRCQ.js";import"./DialogActions-DBQP3v8C.js";import"./ButtonGroupDivider-DgRXATze.js";import"./ChevronUp-BW3alSKD.js";import"./ChevronDown-FLKzC-yj.js";import"./DropdownBase-v9XSjihc.js";import"./useClickOutside-BeuIZpeh.js";import"./ButtonGroup-CfikcDtR.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-nvQYs82a.js";import"./ItemLink-DalQXR0q.js";import"./DialogByline-B_wU9Yn6.js";import"./DialogMetadata-Dxng_kyk.js";import"./DialogStatus-Bch1gZAG.js";import"./Paperclip-CsdFHAca.js";import"./Files-BMmvKPIN.js";import"./MetaBase-Bw0I74LW.js";import"./MetaItem-DoMfJHar.js";import"./ProgressIcon-YqGQ1fIM.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

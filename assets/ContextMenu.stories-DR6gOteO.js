import{a7 as t}from"./iframe-B8reGtNb.js";import{S as b}from"./ArrowRedo-vE0qgBIo.js";import{S as v}from"./EyeClosed-BDCHRx9k.js";import{S as I}from"./Archive-DhWzN6pb.js";import{S as k}from"./Trash-BwJUxhUJ.js";import{S as w}from"./ClockDashed-Bck2BPa9.js";import{C as i}from"./ContextMenu-V8_bDbgd.js";import{i as l}from"./inboxSearchResults-AWoMH_fD.js";import{S as u}from"./TeddyBear-RU5slmET.js";import{L as x}from"./List-D3NF8NkT.js";import{D as d}from"./DialogListItem-y00kinF9.js";import{L as g}from"./ListItem-_2ccN9iY.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-pbON2RCT.js";import"./Dropdown-mf9EWUWK.js";import"./SearchField-CW2nl4m_.js";import"./MagnifyingGlass-CBDfQb5g.js";import"./FieldBase-DDJWfLpA.js";import"./Typography-Dxv9MSbD.js";import"./useHighlightedText-ZBcygk0-.js";import"./Field-BHSHIm9D.js";import"./Label-D9DJQymt.js";import"./Input-DOKzz0Tj.js";import"./useMenu-G7RJHCVr.js";import"./MenuListItem-DvV5RcWS.js";import"./MenuListHeading-BEkIHHSP.js";import"./MenuItem-b6Fzjl6t.js";import"./ItemMedia-B3mE-krC.js";import"./Avatar-DjLw-5ab.js";import"./AvatarGroup-CBquJS0s.js";import"./Checkmark-7r8S-fkf.js";import"./ItemLabel-OlP1i4ZU.js";import"./Heading-Cybus3jr.js";import"./ItemControls-CBTS8zxi.js";import"./Badge-DzttLmt8.js";import"./Tooltip-fMVkBgtC.js";import"./ChevronRight-BRSkVVAW.js";import"./index-BuUpoUlL.js";import"./InformationSquare-t8wgbWET.js";import"./MenuElipsisHorizontal-CRPur8Uj.js";import"./dialogs-Cl88GwzS.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Ciwy4cpR.js";import"./AttachmentList-cKgB14im.js";import"./AttachmentLink-BwCJAzwA.js";import"./File-BR5BUNC9.js";import"./Section-DovdLmcg.js";import"./Flex-qoZntq9f.js";import"./TransmissionList-B0hSN2ZD.js";import"./Transmission-Wzex1RK2.js";import"./SeenByLog-DA9j2joW.js";import"./SeenByLogButton-BasNMSmY.js";import"./SeenByLogItem-aSQJUYu2.js";import"./Byline-Cu5NuYMg.js";import"./Divider-BrWB8z-j.js";import"./DialogActions-bf0E-djf.js";import"./ButtonGroupDivider-U6otbiA_.js";import"./ChevronUp-B4Qw2TyU.js";import"./ChevronDown-Cin8-QCk.js";import"./DropdownBase-DZP0bYcN.js";import"./useClickOutside-BqlqLFrM.js";import"./ButtonGroup-LpI9N8Q_.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-BENKYjCv.js";import"./ItemLink-c5exwetX.js";import"./DialogByline-hAPxHzVB.js";import"./DialogMetadata-CIfvnUt4.js";import"./DialogStatus-BNH3wCBK.js";import"./MetaItem-BkZZUQRR.js";import"./ProgressIcon-hnH5UKKW.js";import"./Paperclip-eBxaxihm.js";import"./Files-Clr75J6I.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};

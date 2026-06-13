import{a7 as t}from"./iframe-2h8IP8d3.js";import{S as b}from"./ArrowRedo-g8kHdPeh.js";import{S as v}from"./EyeClosed-DNoBOvJF.js";import{S as I}from"./Archive-CTNGH1CU.js";import{S as k}from"./Trash-DgElRFQM.js";import{S as w}from"./ClockDashed-Cv4GmxbJ.js";import{C as n}from"./ContextMenu-JRPx45pc.js";import{i as l}from"./inboxSearchResults-WTmRFRBS.js";import{S as u}from"./TeddyBear-Ce_Xeyq8.js";import{L as x}from"./List-BAuO8R5u.js";import{D as d}from"./DialogListItem-ybn8Guou.js";import{L as g}from"./ListItem-Cu2B-552.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController--HjFekig.js";import"./Dropdown-BKTHH5xT.js";import"./SearchField-_MN_HrdV.js";import"./MagnifyingGlass-CI0_p9bj.js";import"./FieldBase-DGYDbbnf.js";import"./Typography-DY06DO0f.js";import"./useHighlightedText-CelzCUqF.js";import"./Field-BxD7Ql4y.js";import"./Label-ZzFKhgKK.js";import"./Input-CcSuNkw7.js";import"./useMenu-DBT0rzRb.js";import"./MenuListItem-Bu8N3gRa.js";import"./MenuListDivider-C4ZS-zxE.js";import"./MenuListHeading-CFPiwF83.js";import"./MenuItem-Cg_2HM56.js";import"./ItemMedia-F0nN_YEB.js";import"./Avatar-C_KS8ezx.js";import"./AvatarGroup-ChTLLSw-.js";import"./Checkmark-kZsld0tw.js";import"./ItemLabel-DAuWzgED.js";import"./Heading-DXu-0NAz.js";import"./ItemControls-F7yjZiAX.js";import"./Badge-Pn_S1ZTN.js";import"./Tooltip-D08FTuVb.js";import"./ChevronRight-Bz8Cr0I4.js";import"./index-CQmnZsg3.js";import"./InformationSquare-DAAIm6NS.js";import"./MenuElipsisHorizontal-CeM94VAc.js";import"./dialogs-BOAjmqzv.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DhQ8WC2x.js";import"./AttachmentList-DHYQNZ21.js";import"./AttachmentLink-SDRY7jRt.js";import"./File-DYZYA0UQ.js";import"./Section-CJtHgorM.js";import"./Flex-CMEhZHn2.js";import"./TransmissionList-CFJbDiB-.js";import"./Transmission-iTPk3m8D.js";import"./SeenByLog-AQtmfeZr.js";import"./SeenByLogButton-D2r0feXh.js";import"./SeenByLogItem-uO44ZNgk.js";import"./Byline-CFuFEoPr.js";import"./Divider-aEHEf4IL.js";import"./DialogActions-CgYMkcqj.js";import"./ButtonGroupDivider-DKSeMAf-.js";import"./ChevronUp-BQbblg8y.js";import"./ChevronDown-D2-mCLBn.js";import"./DropdownBase-CAi9dcpZ.js";import"./useClickOutside-CSHm_Smd.js";import"./ButtonGroup-Ct8EhDC8.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-Pkm_V99C.js";import"./ItemLink-CONNhs78.js";import"./DialogByline-RACk6jEe.js";import"./DialogMetadata-Cm7RfiK-.js";import"./DialogStatus-BCAWwOhJ.js";import"./MetaItem-CJNDMCBg.js";import"./ProgressIcon-DakKOrSO.js";import"./Paperclip-CxHIuIvc.js";import"./Files-OvybudHN.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

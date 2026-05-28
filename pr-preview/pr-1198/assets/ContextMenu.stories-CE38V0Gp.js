import{p as t}from"./iframe-DrMVe4hJ.js";import{S as b}from"./ArrowRedo-BydlX04m.js";import{S as v}from"./EyeClosed-yetoaSbd.js";import{S as I}from"./Archive-BqJg8DEZ.js";import{S as k}from"./Trash-DgVztnIf.js";import{S as w}from"./ClockDashed-BtZjq-3Y.js";import{C as r}from"./ContextMenu-Dtj8L1E_.js";import{i as l}from"./inboxSearchResults-CY0deUGj.js";import{S as u}from"./TeddyBear-0jtcS0PP.js";import{L as x}from"./List-kom_q9bW.js";import{D as d}from"./DialogListItem-CaGaBPvc.js";import{L as g}from"./ListItem-DPR0AizJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CwrI0QJg.js";import"./useDropdownMenuController-BAGvidc8.js";import"./Dropdown-CG27uion.js";import"./index-B2LUQ97G.js";import"./Button-B40GVZAo.js";import"./tooltip-BY1BnveL.js";import"./XMark-BXMpu0Gf.js";import"./SearchField-BnuJ-svS.js";import"./MagnifyingGlass-BYmBhmCt.js";import"./FieldBase-C4Wnopmd.js";import"./Typography-BZD6V0ik.js";import"./useHighlightedText-BA3QT9FH.js";import"./Skeleton-BKl0bJYN.js";import"./Label-QaOAiYFD.js";import"./Input-kqR7j7M6.js";import"./useMenu-CrRt-E4f.js";import"./MenuListItem-D8f5vRSf.js";import"./MenuListHeading-UZ0vr2Pr.js";import"./MenuItem-B27UidAs.js";import"./ItemMedia-B9-jRKLO.js";import"./Avatar-toOOZ7nf.js";import"./AvatarGroup-CVynWGO_.js";import"./Icon-CK8FcAiF.js";import"./Checkmark-OKWU0xmP.js";import"./ItemLabel-DjesYwl7.js";import"./Heading-DYwrq57L.js";import"./ItemControls-ztKmX_ZB.js";import"./Badge-BnCvYltQ.js";import"./Tooltip-BEnHuPi8.js";import"./ChevronRight-u16zgCRT.js";import"./index-j3-eoKUd.js";import"./InformationSquare-J3q8zJp8.js";import"./MenuElipsisHorizontal-BLWR8eqI.js";import"./dialogs-4SBV6Phl.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-H-pTgqrU.js";import"./AttachmentList-C6h6zMoV.js";import"./AttachmentLink-lV3ZcjXe.js";import"./File-DBEGNBhH.js";import"./Section-BOFb_opG.js";import"./Flex-Bv-_adYq.js";import"./TransmissionList-C7_BHDpP.js";import"./Transmission-BnWlMkZf.js";import"./SeenByLog-BdDJNc56.js";import"./SeenByLogButton-WkncvWBv.js";import"./SeenByLogItem-Oq34ALLi.js";import"./Byline-D1JKn8Co.js";import"./Divider-CB6iXjX5.js";import"./DialogActions-BsVnKOLP.js";import"./ButtonGroupDivider-t1hdeYZx.js";import"./ChevronUp-CD8uiaYc.js";import"./ChevronDown--vsRLj1W.js";import"./DropdownBase-Cwy2Uzhj.js";import"./useClickOutside-DkBfivfW.js";import"./ButtonGroup-Bxqmt3uG.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DuWKD7l0.js";import"./ItemLink-Cz_W1z7X.js";import"./DialogByline-CksV8lYB.js";import"./DialogMetadata-ClqFxC09.js";import"./DialogStatus-DxRD4na7.js";import"./MetaItem-DJ9RHrvV.js";import"./ProgressIcon-CJGK6hsd.js";import"./Paperclip-BDBVzmFe.js";import"./Files-CSswGGok.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Vt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const p=l.items[0],e=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const Wt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Wt as __namedExportsOrder,Vt as default};
